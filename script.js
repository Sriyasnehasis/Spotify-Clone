console.log("Welcome to spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Like Strangers Do" , filePath:"songs/1.mp3",coverPath: "covers/cover1.jpg" },
    {songName: "Sick Of You " , filePath:"songs/2.mp3",coverPath: "covers/cover2.jpg" },
    {songName: "Delicate" , filePath:"songs/3.mp3",coverPath: "covers/cover3.jpg" },
    {songName: "The Race" , filePath:"songs/4.mp3",coverPath: "covers/cover4.jpg" },
    {songName: "Timeless" , filePath:"songs/5.mp3",coverPath: "covers/cover5.jpg" },
    {songName: "Heaven And Back" , filePath:"songs/6.mp3",coverPath: "covers/cover6.jpg" },
    {songName: "Old Town Road" , filePath:"songs/7.mp3",coverPath: "covers/cover7.jpg" },

]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElemengt.play();

// handle play/pause click 
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid');
        masterPlay.classList.remove('fa-play');

        masterPlay.classList.add('fa-solid');
        masterPlay.classList.add('fa-pause');

        gif.style.opacity = 1;
      

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid');
        masterPlay.classList.remove('fa-pause');

        masterPlay.classList.add('fa-solid'); 
        masterPlay.classList.add('fa-play');

        gif.style.opacity = 0;

    }

});


//listen to events
audioElement.addEventListener('timeupdate' , ()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);

    myProgressBar.value=progress;


})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ // for each element in the class songItemPlay
        element.classList.remove('fa-solid');
        element.classList.remove('fa-pause');
        element.classList.add('fa-solid'); 
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e) =>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-solid');
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-solid');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-solid');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-solid');
        masterPlay.classList.add('fa-pause');
        



    })
})

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex >= 7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
audioElement.src=`songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-solid');
    masterPlay.classList.add('fa-pause');
})


document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex <= 0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
audioElement.src=`./songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid');
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-solid');
    masterPlay.classList.add('fa-pause');
})


    


