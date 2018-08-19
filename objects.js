
var playlist = {
  SaraBareilles: "Gravity"
}; 

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}



  1) objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:

      AssertionError: expected { Object (SaraBareilles, Slowdive, ...) } to contain keys 'Slowdive', 'My Bloody Valentine', and 'Phil Ochs'
      + expected - actual

       [
         "My Bloody Valentine"
      -  "SaraBareilles"
      +  "Phil Ochs"
         "Slowdive"
      -  "artistName"
       ]
