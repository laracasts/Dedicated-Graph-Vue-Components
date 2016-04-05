<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div>
            <h1>Rocket League Wins Comparison</h1>
            
            <wins-graph :player="{{ $jeffrey }}" :opponent="{{ $taylor }}"></wins-graph>
        </div>

        <script src="/js/main.js"></script>
    </body>
</html>
