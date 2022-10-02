m = new Array;
m = [['n', 'a', 't', 'a', 'c', 'a', 'o', 'z', 'd', 'a'],
['x', 't', 'i', 'r', 'u', 'g', 'b', 'y', 'f', 'f'],
['a', 'l', 'q', 'v', 'n', 'm', 'p', 'q', 'w', 'u'],
['d', 'e', 'd', 's', 'x', 'a', 'p', 'c', 'x', 't'],
['r', 't', 'c', 'o', 'b', 't', 'e', 'n', 'i', 's'],
['e', 'i', 'a', 'y', 'z', 'q', 't', 'c', 'e', 'a'],
['z', 's', 'u', 'v', 'o', 'l', 'e', 'i', 'x', 'l'],
['r', 'm', 'f', 'r', 'n', 'e', 'c', 'p', 'a', 'p'],
['c', 'o', 'r', 'r', 'i', 'd', 'a', 'k', 'e', 'u'],
['g', 'b', 'n', 'e', 'g', 'l', 'j', 'u', 'd', 'o']];

document.write("<table id='tabela'>")
for (l = 0; l < 10; l++) {
    document.write("<tr>");
    for (c = 0; c < 10; c++) {
        if (l == 0 && c >= 0 && c <= 6) {
            document.write("<td id='cor'>" + m[l][c] + "</td>");
        }
        else if (l >= 0 && l <= 8 && c == 1) {
            document.write("<td id='cor2'>" + m[l][c] + "</td>");
        }
        else if (l >= 1 && l <= 6 && c == 0) {
            document.write("<td id='cor3'>" + m[l][c] + "</td>");
        }
        else if (l == 8 && c >= 0 && c <= 6) {
            document.write("<td id='cor'>" + m[l][c] + "</td>");
        }
        else if (c == 6 && l >= 3 && l <= 8) {
            document.write("<td id='cor2'>" + m[l][c] + "</td>");
        }
        else if (l == 9 && c >= 6 && c <= 9) {
            document.write("<td id='cor3'>" + m[l][c] + "</td>");
        }
        else if (l == 6 && c >= 3 && c <= 7) {
            document.write("<td id='cor3'>" + m[l][c] + "</td>");
        }
        else if (c >= 5 && c <= 9 && l == 4) {
            document.write("<td id='cor3'>" + m[l][c] + "</td>");
        }
        else if (c == 9 && l >= 1 && l <= 6) {
            document.write("<td id='cor'>" + m[l][c] + "</td>");
        }
        else if (l == 1 && c >= 3 && c <= 7) {
            document.write("<td id='cor2'>" + m[l][c] + "</td>");
        }
        else {
            document.write("<td>" + m[l][c] + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");