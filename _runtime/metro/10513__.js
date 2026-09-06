// _runtime/metro/10513__.js

export const parseYear = function parseYear(match) {
  if (match.match(/^[0-9]{1,4}$/)) {
    const _parseInt3 = parseInt;
    const parsed = parseInt(match);
    let sum = parsed;
    if (parsed < 100) {
      let num3 = 2000;
      if (parsed > 50) {
        num3 = 1900;
      }
      sum = parsed + num3;
    }
    return sum;
  } else if (match.match(/a\.?\s*c\.?/i)) {
    const _parseInt2 = parseInt;
    return -parseInt(match.replace(/a\.?\s*c\.?/i, ""));
  } else {
    const _parseInt = parseInt;
    return parseInt(match);
  }
};
export const WEEKDAY_DICTIONARY = {
  domingo: 0,
  dom: 0,
  segunda: 1,
  "segunda-feira": 1,
  seg: 1,
  terça: 2,
  "terça-feira": 2,
  ter: 2,
  quarta: 3,
  "quarta-feira": 3,
  qua: 3,
  quinta: 4,
  "quinta-feira": 4,
  qui: 4,
  sexta: 5,
  "sexta-feira": 5,
  sex: 5,
  sábado: 6,
  sabado: 6,
  sab: 6,
};
export const MONTH_DICTIONARY = {
  janeiro: 1,
  jan: 1,
  "jan.": 1,
  fevereiro: 2,
  fev: 2,
  "fev.": 2,
  março: 3,
  mar: 3,
  "mar.": 3,
  abril: 4,
  abr: 4,
  "abr.": 4,
  maio: 5,
  mai: 5,
  "mai.": 5,
  junho: 6,
  jun: 6,
  "jun.": 6,
  julho: 7,
  jul: 7,
  "jul.": 7,
  agosto: 8,
  ago: 8,
  "ago.": 8,
  setembro: 9,
  set: 9,
  "set.": 9,
  outubro: 10,
  out: 10,
  "out.": 10,
  novembro: 11,
  nov: 11,
  "nov.": 11,
  dezembro: 12,
  dez: 12,
  "dez.": 12,
};
export const YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
