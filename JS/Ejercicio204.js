const str = "an un lugar de la mancha";
const str2 = "sn la mancha hay un lugaa";
const ultimostr= str.length-1;
const ultimostr2= str2.length-1;
if ((str.charAt(0) == str2.charAt(0))&&(str.charAt(ultimostr) == str2.charAt(ultimostr2)))
 {
    document.write("Los dos strings tienen la primera letra igual y la última.");
} else {
    document.write("Los dos strings tienen la primera letra diferente.")
}