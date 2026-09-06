// _runtime/03954_parsers.js
import _mod3955 from "metro/03955__.js";
import _mod3957 from "metro/03957__.js";
import _mod3960 from "metro/03960__.js";
import _mod3961 from "metro/03961__.js";
import _mod3962 from "metro/03962__.js";
import _mod3963 from "metro/03963__.js";
import _mod3964 from "metro/03964__.js";
import _mod3965 from "metro/03965__.js";
import _mod3966 from "metro/03966__.js";
import _mod3967 from "metro/03967__.js";
import _mod3969 from "metro/03969__.js";
import _mod3971 from "metro/03971__.js";
import _mod3972 from "metro/03972__.js";
import _mod3973 from "metro/03973__.js";
import _mod3975 from "metro/03975__.js";
import _mod3976 from "metro/03976__.js";
import _mod3977 from "metro/03977__.js";
import _mod3979 from "metro/03979__.js";
import _mod3980 from "metro/03980__.js";
import _mod3981 from "metro/03981__.js";
import _mod3982 from "metro/03982__.js";
import _mod3983 from "metro/03983__.js";
import _mod3984 from "metro/03984__.js";
import _mod3985 from "metro/03985__.js";
import _mod3986 from "metro/03986__.js";
import _mod3987 from "metro/03987__.js";
import _mod3988 from "metro/03988__.js";
import _mod3989 from "metro/03989__.js";
import _mod3990 from "metro/03990__.js";
import _mod3991 from "metro/03991__.js";
import _mod3992 from "metro/03992__.js";

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
const eraParser = new _mod3955.EraParser();
point.G = eraParser;
const yearParser = new _mod3957.YearParser();
point.y = yearParser;
const localWeekYearParser = new _mod3960.LocalWeekYearParser();
point.Y = localWeekYearParser;
const iSOWeekYearParser = new _mod3961.ISOWeekYearParser();
point.R = iSOWeekYearParser;
const extendedYearParser = new _mod3962.ExtendedYearParser();
point.u = extendedYearParser;
const quarterParser = new _mod3963.QuarterParser();
point.Q = quarterParser;
const standAloneQuarterParser = new _mod3964.StandAloneQuarterParser();
point.q = standAloneQuarterParser;
const monthParser = new _mod3965.MonthParser();
point.M = monthParser;
const standAloneMonthParser = new _mod3966.StandAloneMonthParser();
point.L = standAloneMonthParser;
const localWeekParser = new _mod3967.LocalWeekParser();
point.w = localWeekParser;
const iSOWeekParser = new _mod3969.ISOWeekParser();
point.I = iSOWeekParser;
const dateParser = new _mod3971.DateParser();
point.d = dateParser;
const dayOfYearParser = new _mod3972.DayOfYearParser();
point.D = dayOfYearParser;
const dayParser = new _mod3973.DayParser();
point.E = dayParser;
const localDayParser = new _mod3975.LocalDayParser();
point.e = localDayParser;
const standAloneLocalDayParser = new _mod3976.StandAloneLocalDayParser();
point.c = standAloneLocalDayParser;
const iSODayParser = new _mod3977.ISODayParser();
point.i = iSODayParser;
const aMPMParser = new _mod3979.AMPMParser();
point.a = aMPMParser;
const aMPMMidnightParser = new _mod3980.AMPMMidnightParser();
point.b = aMPMMidnightParser;
const dayPeriodParser = new _mod3981.DayPeriodParser();
point.B = dayPeriodParser;
const hour1to12Parser = new _mod3982.Hour1to12Parser();
point.h = hour1to12Parser;
const hour0to23Parser = new _mod3983.Hour0to23Parser();
point.H = hour0to23Parser;
const hour0To11Parser = new _mod3984.Hour0To11Parser();
point.K = hour0To11Parser;
const hour1To24Parser = new _mod3985.Hour1To24Parser();
point.k = hour1To24Parser;
const minuteParser = new _mod3986.MinuteParser();
point.m = minuteParser;
const secondParser = new _mod3987.SecondParser();
point.s = secondParser;
const fractionOfSecondParser = new _mod3988.FractionOfSecondParser();
point.S = fractionOfSecondParser;
const iSOTimezoneWithZParser = new _mod3989.ISOTimezoneWithZParser();
point.X = iSOTimezoneWithZParser;
const iSOTimezoneParser = new _mod3990.ISOTimezoneParser();
point.x = iSOTimezoneParser;
const timestampSecondsParser = new _mod3991.TimestampSecondsParser();
point.t = timestampSecondsParser;
const timestampMillisecondsParser = new _mod3992.TimestampMillisecondsParser();
point.T = timestampMillisecondsParser;

export const parsers = point;
