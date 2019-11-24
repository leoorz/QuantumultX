/*

@supported 0FB2948C86B5

*/

var body = $response.body;
body = '\/*\n@supported 0FB2948C86B5\n*\/\n' + body;

$done(body);