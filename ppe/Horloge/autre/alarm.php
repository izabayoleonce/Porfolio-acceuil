<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" >
    <link rel="stylesheet" href="../styles/alarm.css">
    <title>Clock</title>
</head>
<body>
    <header class="topbar">
        <a href="../index.php" class="topbar-logo">Horloge</a>
        <nav class="topbar-nav">
            <a href="../index.php">Heure et date</a>
            <a href="../autre/minuteur.php">Minuteur</a>
            <a href="../autre/alarm.php">alarme</a>
        </nav>
    </header>

    <section class="container">
        <div id="clock"></div>
        <input onchange="setAlarmTime(this.value)" name="alarmTime" type="datetime-local">
        <div class="controls">
            <button onclick="setAlarm()" class="button set-alarm">Enregistre</button>
            <button onclick="clearAlarm()" class="button clear-alarm">Arrêter et supprimer</button>
        </div>
    </section>
    <script src="../styles/alarm.js"></script>
</body>
</html>