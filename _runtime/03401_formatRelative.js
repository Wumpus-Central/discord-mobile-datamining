// _runtime/03401_formatRelative.js
let closure_0 = { lastWeek: "'el' eeee 'pasado a la' p", yesterday: "'ayer a la' p", today: "'hoy a la' p", tomorrow: "'ma\u00F1ana a la' p", nextWeek: "eeee 'a la' p", other: "P" };
let closure_1 = { lastWeek: "'el' eeee 'pasado a las' p", yesterday: "'ayer a las' p", today: "'hoy a las' p", tomorrow: "'ma\u00F1ana a las' p", nextWeek: "eeee 'a las' p", other: "P" };

export default function formatRelative(arg0, getUTCHours) {
  if (1 !== getUTCHours.getUTCHours()) {
    let tmp2 = table2[arg0];
  } else {
    tmp2 = table[arg0];
  }
  return tmp2;
};
export default exports.default;