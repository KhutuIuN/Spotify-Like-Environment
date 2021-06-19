var content;
var xmlhttp = new XMLHttpRequest();
var playlistsHeaderFlag = false;
var moreFlag = false;

function createHeaderForPlaylists() {
  var tr = document.getElementById("contentTr");
  tr.textContent = "";
  var th1 = document.createElement("th");
  th1.scope = "col";
  th1.textContent = "ID";

  var th2 = document.createElement("th");
  th2.scope = "col";
  th2.textContent = "Name";

  var th3 = document.createElement("th");
  th3.scope = "col";
  th3.textContent = "Number Of Tracks";

  var th4 = document.createElement("th");
  th4.scope = "col";
  th4.textContent = "Go To Playlist!";

  var th5 = document.createElement("th");
  th5.scope = "col";
  th5.textContent = "More Detail";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
}

function createHeaderForTracks() {
  var tr = document.getElementById("contentTr");
  tr.textContent = "";
  var th1 = document.createElement("th");
  th1.scope = "col";
  th1.textContent = "Track Position";

  var th2 = document.createElement("th");
  th2.scope = "col";
  th2.textContent = "Track Name";

  var th3 = document.createElement("th");
  th3.scope = "col";
  th3.textContent = "Artist Name";

  var th4 = document.createElement("th");
  th4.scope = "col";
  th4.textContent = "Album Name";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
}

function writePlaylists(arr, name) {
  if (!playlistsHeaderFlag || moreFlag) {
    createHeaderForPlaylists();
    playlistsHeaderFlag = true;
  }
  var tbody = document.getElementById("contentBody");
  tbody.textContent = "";

  for (var i = 0; i < arr.playlists.length; i++) {
    var innertr = document.createElement("tr");
    var id = document.createElement("th");
    id.scope = "row";
    id.textContent = arr.playlists[i].pid;
    var playlistName = document.createElement("td");
    playlistName.textContent = arr.playlists[i].name;
    var numberOfTracks = document.createElement("td");
    numberOfTracks.textContent = arr.playlists[i].num_tracks;
    var btnColumn = document.createElement("td");
    var value = document.createTextNode("To Playlist!");
    var btn = document.createElement("button");
    btn.setAttribute("onclick", "showTracks(this)");
    btn.setAttribute("id", i);
    btn.setAttribute("value", name);
    btn.className = "btn btn-block";
    btn.style = "color:#4e0075; font-weight:bold; background-color: #cc6600";

    btn.appendChild(value);
    btnColumn.appendChild(btn);

    var more = document.createElement("td");
    var moreBtn = document.createElement("button");
    var detail = document.createTextNode("For More...");
    moreBtn.className = "btn btn-block";
    moreBtn.setAttribute("onclick", "moreDetail(this)");
    moreBtn.setAttribute("id", i);
    moreBtn.setAttribute("value", name);
    moreBtn.style = "color:#4e0075; font-weight:bold; background-color:#02a702";
    moreBtn.appendChild(detail);
    more.appendChild(moreBtn);

    innertr.appendChild(id);
    innertr.appendChild(playlistName);
    innertr.appendChild(numberOfTracks);
    innertr.appendChild(btnColumn);
    innertr.appendChild(more);
    tbody.appendChild(innertr);
  }
}

function writeTracks(arr, index) {
  playlistsHeaderFlag = false;
  createHeaderForTracks();

  var tbody = document.getElementById("contentBody");
  tbody.textContent = "";
  for (var i = 0; i < arr.playlists[index].tracks.length; i++) {
    var innertr = document.createElement("tr");

    var trackPos = document.createElement("th");
    trackPos.scope = "row";
    trackPos.textContent = i;

    var trackName = document.createElement("td");
    trackName.textContent = arr.playlists[index].tracks[i].track_name;

    var artistName = document.createElement("td");
    artistName.textContent = arr.playlists[index].tracks[i].artist_name;

    var albumName = document.createElement("td");
    albumName.textContent = arr.playlists[index].tracks[i].album_name;

    innertr.appendChild(trackPos);
    innertr.appendChild(trackName);
    innertr.appendChild(trackName);
    innertr.appendChild(artistName);
    innertr.appendChild(albumName);
    tbody.appendChild(innertr);
  }
}

function show(e) {
  var url = "samples/" + e.id + ".json";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      writePlaylists(myArr, e.id);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function showTracks(e) {
  var url = "samples/" + e.value + ".json";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      writeTracks(myArr, e.id);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function moreDetail(e) {
  var url = "samples/" + e.value + ".json";
  moreFlag = true;
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);

      var tr = document.getElementById("contentTr");
      tr.textContent = "";

      var th1 = document.createElement("th");
      th1.scope = "col";
      th1.textContent = "Name";

      var th2 = document.createElement("th");
      th2.scope = "col";
      th2.textContent = "Collabrative";

      var th3 = document.createElement("th");
      th3.scope = "col";
      th3.textContent = "Pid";

      var th4 = document.createElement("th");
      th4.scope = "col";
      th4.textContent = "Modified At";

      var th5 = document.createElement("th");
      th5.scope = "col";
      th5.textContent = "Number Of Tracks";

      var th6 = document.createElement("th");
      th6.scope = "col";
      th6.textContent = "Number Of Albums";

      var th7 = document.createElement("th");
      th7.scope = "col";
      th7.textContent = "Number Of Followers";

      var th8 = document.createElement("th");
      th8.scope = "col";
      th8.textContent = "Number Of Edits";

      var th9 = document.createElement("th");
      th9.scope = "col";
      th9.textContent = "Duration";

      var th10 = document.createElement("th");
      th10.scope = "col";
      th10.textContent = "Number Of Artists";

      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      tr.appendChild(th5);
      tr.appendChild(th6);
      tr.appendChild(th7);
      tr.appendChild(th8);
      tr.appendChild(th9);
      tr.appendChild(th10);

      var tbody = document.getElementById("contentBody");
      tbody.textContent = "";

      var innertr = document.createElement("tr");

      var name = document.createElement("th");
      name.scope = "row";
      name.textContent = myArr.playlists[e.id].name;

      var collabrative = document.createElement("td");
      collabrative.textContent = myArr.playlists[e.id].collaborative;

      var pid = document.createElement("td");
      pid.textContent = myArr.playlists[e.id].pid;

      var number_of_tracks = document.createElement("td");
      number_of_tracks.textContent = myArr.playlists[e.id].num_tracks;

      var modified = document.createElement("td");
      modified.textContent = myArr.playlists[e.id].modified_at;

      var number_of_albums = document.createElement("td");
      number_of_albums.textContent = myArr.playlists[e.id].num_albums;

      var number_of_followers = document.createElement("td");
      number_of_followers.textContent = myArr.playlists[e.id].num_followers;

      var number_of_edits = document.createElement("td");
      number_of_edits.textContent = myArr.playlists[e.id].num_edits;

      var duration = document.createElement("td");
      var result =
        Math.floor(myArr.playlists[e.id].duration_ms / (1000 * 60 * 60)) +
        ":" +
        (Math.floor(myArr.playlists[e.id].duration_ms / (1000 * 60)) % 60) +
        ":" +
        (Math.floor(myArr.playlists[e.id].duration_ms / 1000) % 60);
      duration.textContent = result;

      var number_of_artists = document.createElement("td");
      number_of_artists.textContent = myArr.playlists[e.id].num_artists;

      innertr.appendChild(name);
      innertr.appendChild(collabrative);
      innertr.appendChild(pid);
      innertr.appendChild(modified);
      innertr.appendChild(number_of_tracks);
      innertr.appendChild(number_of_albums);
      innertr.appendChild(number_of_followers);
      innertr.appendChild(number_of_edits);
      innertr.appendChild(duration);
      innertr.appendChild(number_of_artists);
      tbody.appendChild(innertr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
