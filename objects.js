
var playlist = {
  SaraBareilles: "Gravity"
}; 

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
