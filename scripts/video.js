let video = document.querySelector("video");

let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

// create new cue text at specified time

track.addCue(new VTTCue(0, 4, "In a whole new galaxy"));
track.addCue(new VTTCue(4, 8, "where adventure awaits"));
track.addCue(new VTTCue(8, 11, "Will you be brave enough?"));
