<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>communes</title>
</head>
<body>
<h2>Recherche de communes</h2>
<form action="CommuneServlet">
Par code postal <input name="cp" id="cp" size="8"> <button>Rechercher</button>
</form>
<form action="CommuneByNomServlet">
Par département <input name="nomVille" id="nom"> <button>Rechercher</button>
</form>
</body>
</html>