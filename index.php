<!DOCTYPE html>
<html ng-app="myApp">
    <head>
        <meta charset="UTF-8">
        <title ng-view>Angular</title>
    <script src="https://code.angularjs.org/1.3.0/angular.min.js"></script>
	<script src="https://code.angularjs.org/1.3.0/angular-route.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
    </head>
    <body>

    <nav>
        <li><a href="#/main">Main</a></li>
        <li><a href="#/second">Second</a></li>
    </nav>

    <div ng-view>

    </div>

    </body>
</html>