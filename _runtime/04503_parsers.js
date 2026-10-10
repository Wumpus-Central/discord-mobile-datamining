// _runtime/04503_parsers.js
import _mod4504 from "metro/04504__.js";
import _mod4506 from "metro/04506__.js";
import _mod4509 from "metro/04509__.js";
import _mod4510 from "metro/04510__.js";
import _mod4511 from "metro/04511__.js";
import _mod4512 from "metro/04512__.js";
import _mod4513 from "metro/04513__.js";
import _mod4514 from "metro/04514__.js";
import _mod4515 from "metro/04515__.js";
import _mod4516 from "metro/04516__.js";
import _mod4518 from "metro/04518__.js";
import _mod4520 from "metro/04520__.js";
import _mod4521 from "metro/04521__.js";
import _mod4522 from "metro/04522__.js";
import _mod4524 from "metro/04524__.js";
import _mod4525 from "metro/04525__.js";
import _mod4526 from "metro/04526__.js";
import _mod4528 from "metro/04528__.js";
import _mod4529 from "metro/04529__.js";
import _mod4530 from "metro/04530__.js";
import _mod4531 from "metro/04531__.js";
import _mod4532 from "metro/04532__.js";
import _mod4533 from "metro/04533__.js";
import _mod4534 from "metro/04534__.js";
import _mod4535 from "metro/04535__.js";
import _mod4536 from "metro/04536__.js";
import _mod4537 from "metro/04537__.js";
import _mod4538 from "metro/04538__.js";
import _mod4539 from "metro/04539__.js";
import _mod4540 from "metro/04540__.js";
import _mod4541 from "metro/04541__.js";

const point = {
  G: null,
  y: null,
  Y: null,
  R: null,
  u: null,
  Q: null,
  q: null,
  M: null,
  L: null,
  w: null,
  I: null,
  d: null,
  D: null,
  E: null,
  e: null,
  c: null,
  i: null,
  a: null,
  b: null,
  B: null,
  h: null,
  H: null,
  K: null,
  k: null,
  m: null,
  s: null,
  S: null,
  X: null,
  x: null,
  t: null,
  T: null,
};
const eraParser = new _mod4504.EraParser();
point.G = eraParser;
const yearParser = new _mod4506.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod4509.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod4510.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod4511.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod4512.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod4513.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod4514.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod4515.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod4516.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod4518.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod4520.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod4521.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod4522.DayParser();
point.E = dayParser;
const localDayParser = new _mod4524.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod4525.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod4526.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod4528.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod4529.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod4530.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod4531.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod4532.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod4533.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod4534.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod4535.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod4536.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod4537.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod4538.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod4539.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod4540.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod4541.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
