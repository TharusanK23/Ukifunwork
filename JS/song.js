SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {


  SC.stream('/tracks/173826641', function(song) {
    $('#play1').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause1').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });


  SC.stream('/tracks/615320520', function(song) {
    $('#play2').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause2').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/602597427', function(song) {
    $('#play3').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause3').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/613538913', function(song) {
    $('#play4').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#play4').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#play4').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/', function(song) {
    $('#play5').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause5').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/589799316', function(song) {
    $('#play6').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause6').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/508701207', function(song) {
    $('#play7').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause7').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop7').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/', function(song) {
    $('#play8').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause8').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop8').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });


  SC.stream('/tracks/553877745', function(song) {
    $('#play9').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause9').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop9').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });


  SC.stream('/tracks/', function(song) {
    $('#play10').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause10').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop10').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });


  SC.stream('/tracks/347844042', function(song) {
    $('#play11').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause11').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#play11').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });



  SC.stream('/tracks/', function(song) {
    $('#play12').click(function(e) {
      e.preventDefault();
      song.start();
    });
    $('#pause12').click(function(e) {
        e.preventDefault();
        song.pause();
    });
    $('#stop12').click(function(e) {
      e.preventDefault();
      song.stop();
    });
  });

});
