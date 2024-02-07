function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
   
   if (fecha instanceof Date) {
    return !isNaN(fecha.getTime());
  }
  const partes = fecha.split('-');
  if (partes.length !== 3) {
    return false;
  }
  const [anio, mes, dia] = partes;
  const date = new Date(anio, mes - 1, dia); 
  return !isNaN(date.getTime()) && date.toISOString().slice(0, 10) === fecha;

}

module.exports = esFechaValida;