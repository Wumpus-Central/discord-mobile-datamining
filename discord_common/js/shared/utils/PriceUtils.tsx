// discord_common/js/shared/utils/PriceUtils.tsx
import addDefault from "../../../../_runtime/07401_add.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";

let closure_2 = ["convertToMajorUnits"];
const CurrencyCodes = fn(1095).CurrencyCodes;
const map = new Map();
const CurrencyExponents = { [CurrencyCodes.AED]: 2, [CurrencyCodes.AFN]: 2, [CurrencyCodes.ALL]: 2, [CurrencyCodes.AMD]: 2, [CurrencyCodes.ANG]: 2, [CurrencyCodes.AOA]: 2, [CurrencyCodes.ARS]: 2, [CurrencyCodes.AUD]: 2, [CurrencyCodes.AWG]: 2, [CurrencyCodes.AZN]: 2, [CurrencyCodes.BAM]: 2, [CurrencyCodes.BBD]: 2, [CurrencyCodes.BDT]: 2, [CurrencyCodes.BGN]: 2, [CurrencyCodes.BHD]: 3, [CurrencyCodes.BIF]: 0, [CurrencyCodes.BMD]: 2, [CurrencyCodes.BND]: 2, [CurrencyCodes.BOB]: 2, [CurrencyCodes.BOV]: 2, [CurrencyCodes.BRL]: 2, [CurrencyCodes.BSD]: 2, [CurrencyCodes.BTN]: 2, [CurrencyCodes.BWP]: 2, [CurrencyCodes.BYR]: 0, [CurrencyCodes.BYN]: 2, [CurrencyCodes.BZD]: 2, [CurrencyCodes.CAD]: 2, [CurrencyCodes.CDF]: 2, [CurrencyCodes.CHE]: 2, [CurrencyCodes.CHF]: 2, [CurrencyCodes.CHW]: 2, [CurrencyCodes.CLF]: 0, [CurrencyCodes.CLP]: 0, [CurrencyCodes.CNY]: 2, [CurrencyCodes.COP]: 2, [CurrencyCodes.COU]: 2, [CurrencyCodes.CRC]: 2, [CurrencyCodes.CUC]: 2, [CurrencyCodes.CUP]: 2, [CurrencyCodes.CVE]: 2, [CurrencyCodes.CZK]: 2, [CurrencyCodes.DJF]: 0, [CurrencyCodes.DKK]: 2, [CurrencyCodes.DOP]: 2, [CurrencyCodes.DZD]: 2, [CurrencyCodes.EGP]: 2, [CurrencyCodes.ERN]: 2, [CurrencyCodes.ETB]: 2, [CurrencyCodes.EUR]: 2, [CurrencyCodes.FJD]: 2, [CurrencyCodes.FKP]: 2, [CurrencyCodes.GBP]: 2, [CurrencyCodes.GEL]: 2, [CurrencyCodes.GHS]: 2, [CurrencyCodes.GIP]: 2, [CurrencyCodes.GMD]: 2, [CurrencyCodes.GNF]: 0, [CurrencyCodes.GTQ]: 2, [CurrencyCodes.GYD]: 2, [CurrencyCodes.HKD]: 2, [CurrencyCodes.HNL]: 2, [CurrencyCodes.HRK]: 2, [CurrencyCodes.HTG]: 2, [CurrencyCodes.HUF]: 2, [CurrencyCodes.IDR]: 2, [CurrencyCodes.ILS]: 2, [CurrencyCodes.INR]: 2, [CurrencyCodes.IQD]: 3, [CurrencyCodes.IRR]: 2, [CurrencyCodes.ISK]: 0, [CurrencyCodes.JMD]: 2, [CurrencyCodes.JOD]: 3, [CurrencyCodes.JPY]: 0, [CurrencyCodes.KES]: 2, [CurrencyCodes.KGS]: 2, [CurrencyCodes.KHR]: 2, [CurrencyCodes.KMF]: 0, [CurrencyCodes.KPW]: 2, [CurrencyCodes.KRW]: 0, [CurrencyCodes.KWD]: 3, [CurrencyCodes.KYD]: 2, [CurrencyCodes.KZT]: 2, [CurrencyCodes.LAK]: 2, [CurrencyCodes.LBP]: 2, [CurrencyCodes.LKR]: 2, [CurrencyCodes.LRD]: 2, [CurrencyCodes.LSL]: 2, [CurrencyCodes.LTL]: 2, [CurrencyCodes.LVL]: 2, [CurrencyCodes.LYD]: 3, [CurrencyCodes.MAD]: 2, [CurrencyCodes.MDL]: 2, [CurrencyCodes.MGA]: 2, [CurrencyCodes.MKD]: 2, [CurrencyCodes.MMK]: 2, [CurrencyCodes.MNT]: 2, [CurrencyCodes.MOP]: 2, [CurrencyCodes.MRO]: 2, [CurrencyCodes.MUR]: 2, [CurrencyCodes.MVR]: 2, [CurrencyCodes.MWK]: 2, [CurrencyCodes.MXN]: 2, [CurrencyCodes.MXV]: 2, [CurrencyCodes.MYR]: 2, [CurrencyCodes.MZN]: 2, [CurrencyCodes.NAD]: 2, [CurrencyCodes.NGN]: 2, [CurrencyCodes.NIO]: 2, [CurrencyCodes.NOK]: 2, [CurrencyCodes.NPR]: 2, [CurrencyCodes.NZD]: 2, [CurrencyCodes.OMR]: 3, [CurrencyCodes.PAB]: 2, [CurrencyCodes.PEN]: 2, [CurrencyCodes.PGK]: 2, [CurrencyCodes.PHP]: 2, [CurrencyCodes.PKR]: 2, [CurrencyCodes.PLN]: 2, [CurrencyCodes.PYG]: 0, [CurrencyCodes.QAR]: 2, [CurrencyCodes.RON]: 2, [CurrencyCodes.RSD]: 2, [CurrencyCodes.RUB]: 2, [CurrencyCodes.RWF]: 0, [CurrencyCodes.SAR]: 2, [CurrencyCodes.SBD]: 2, [CurrencyCodes.SCR]: 2, [CurrencyCodes.SDG]: 2, [CurrencyCodes.SEK]: 2, [CurrencyCodes.SGD]: 2, [CurrencyCodes.SHP]: 2, [CurrencyCodes.SLL]: 2, [CurrencyCodes.SOS]: 2, [CurrencyCodes.SRD]: 2, [CurrencyCodes.SSP]: 2, [CurrencyCodes.STD]: 2, [CurrencyCodes.SVC]: 2, [CurrencyCodes.SYP]: 2, [CurrencyCodes.SZL]: 2, [CurrencyCodes.THB]: 2, [CurrencyCodes.TJS]: 2, [CurrencyCodes.TMT]: 2, [CurrencyCodes.TND]: 3, [CurrencyCodes.TOP]: 2, [CurrencyCodes.TRY]: 2, [CurrencyCodes.TTD]: 2, [CurrencyCodes.TWD]: 2, [CurrencyCodes.TZS]: 2, [CurrencyCodes.UAH]: 2, [CurrencyCodes.UGX]: 0, [CurrencyCodes.USD]: 2, [CurrencyCodes.USN]: 2, [CurrencyCodes.USS]: 2, [CurrencyCodes.UYI]: 0, [CurrencyCodes.UYU]: 2, [CurrencyCodes.UZS]: 2, [CurrencyCodes.VEF]: 2, [CurrencyCodes.VND]: 0, [CurrencyCodes.VUV]: 0, [CurrencyCodes.WST]: 2, [CurrencyCodes.XAF]: 0, [CurrencyCodes.XAG]: 0, [CurrencyCodes.XAU]: 0, [CurrencyCodes.XBA]: 0, [CurrencyCodes.XBB]: 0, [CurrencyCodes.XBC]: 0, [CurrencyCodes.XBD]: 0, [CurrencyCodes.XCD]: 2, [CurrencyCodes.XDR]: 0, [CurrencyCodes.XFU]: 0, [CurrencyCodes.XOF]: 0, [CurrencyCodes.XPD]: 0, [CurrencyCodes.XPF]: 0, [CurrencyCodes.XPT]: 0, [CurrencyCodes.XSU]: 0, [CurrencyCodes.XTS]: 0, [CurrencyCodes.XUA]: 0, [CurrencyCodes.YER]: 2, [CurrencyCodes.ZAR]: 2, [CurrencyCodes.ZMW]: 2, [CurrencyCodes.ZWL]: 2, [CurrencyCodes.DISCORD_ORB]: 0 };
function convertToMajorCurrencyUnits(diff1, USD) {
  if (null == obj[USD]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unexpected currency " + USD);
    throw error;
  } else {
    obj = new addDefault(diff1);
    return obj.dividedBy(10 ** tmp).toNumber();
  }
}
let obj2 = { [fn(5686).CountryCodes.AD]: CurrencyCodes.EUR, [fn(5686).CountryCodes.AE]: CurrencyCodes.AED, [fn(5686).CountryCodes.AF]: CurrencyCodes.AFN, [fn(5686).CountryCodes.AG]: CurrencyCodes.XCD, [fn(5686).CountryCodes.AI]: CurrencyCodes.XCD, [fn(5686).CountryCodes.AL]: CurrencyCodes.ALL, [fn(5686).CountryCodes.AM]: CurrencyCodes.AMD, [fn(5686).CountryCodes.AO]: CurrencyCodes.AOA, [fn(5686).CountryCodes.AQ]: CurrencyCodes.EUR, [fn(5686).CountryCodes.AR]: CurrencyCodes.ARS, [fn(5686).CountryCodes.AS]: CurrencyCodes.USD, [fn(5686).CountryCodes.AT]: CurrencyCodes.EUR, [fn(5686).CountryCodes.AU]: CurrencyCodes.AUD, [fn(5686).CountryCodes.AW]: CurrencyCodes.AWG, [fn(5686).CountryCodes.AX]: CurrencyCodes.EUR, [fn(5686).CountryCodes.AZ]: CurrencyCodes.AZN, [fn(5686).CountryCodes.BA]: CurrencyCodes.BAM, [fn(5686).CountryCodes.BB]: CurrencyCodes.BBD, [fn(5686).CountryCodes.BD]: CurrencyCodes.BDT, [fn(5686).CountryCodes.BE]: CurrencyCodes.EUR, [fn(5686).CountryCodes.BF]: CurrencyCodes.XOF, [fn(5686).CountryCodes.BG]: CurrencyCodes.BGN, [fn(5686).CountryCodes.BH]: CurrencyCodes.BHD, [fn(5686).CountryCodes.BI]: CurrencyCodes.BIF, [fn(5686).CountryCodes.BJ]: CurrencyCodes.XOF, [fn(5686).CountryCodes.BL]: CurrencyCodes.EUR, [fn(5686).CountryCodes.BM]: CurrencyCodes.BMD, [fn(5686).CountryCodes.BN]: CurrencyCodes.BND, [fn(5686).CountryCodes.BO]: CurrencyCodes.BOB, [fn(5686).CountryCodes.BQ]: CurrencyCodes.USD, [fn(5686).CountryCodes.BR]: CurrencyCodes.BRL, [fn(5686).CountryCodes.BS]: CurrencyCodes.BSD, [fn(5686).CountryCodes.BT]: CurrencyCodes.BTN, [fn(5686).CountryCodes.BV]: CurrencyCodes.NOK, [fn(5686).CountryCodes.BW]: CurrencyCodes.BWP, [fn(5686).CountryCodes.BY]: CurrencyCodes.BYN, [fn(5686).CountryCodes.BZ]: CurrencyCodes.BZD, [fn(5686).CountryCodes.CA]: CurrencyCodes.CAD, [fn(5686).CountryCodes.CC]: CurrencyCodes.AUD, [fn(5686).CountryCodes.CD]: CurrencyCodes.CDF, [fn(5686).CountryCodes.CF]: CurrencyCodes.XAF, [fn(5686).CountryCodes.CG]: CurrencyCodes.XAF, [fn(5686).CountryCodes.CH]: CurrencyCodes.CHF, [fn(5686).CountryCodes.CI]: CurrencyCodes.XOF, [fn(5686).CountryCodes.CK]: CurrencyCodes.NZD, [fn(5686).CountryCodes.CL]: CurrencyCodes.CLP, [fn(5686).CountryCodes.CM]: CurrencyCodes.XAF, [fn(5686).CountryCodes.CN]: CurrencyCodes.CNY, [fn(5686).CountryCodes.CO]: CurrencyCodes.COP, [fn(5686).CountryCodes.CR]: CurrencyCodes.CRC, [fn(5686).CountryCodes.CU]: CurrencyCodes.CUP, [fn(5686).CountryCodes.CV]: CurrencyCodes.CVE, [fn(5686).CountryCodes.CW]: CurrencyCodes.ANG, [fn(5686).CountryCodes.CX]: CurrencyCodes.AUD, [fn(5686).CountryCodes.CY]: CurrencyCodes.EUR, [fn(5686).CountryCodes.CZ]: CurrencyCodes.CZK, [fn(5686).CountryCodes.DE]: CurrencyCodes.EUR, [fn(5686).CountryCodes.DJ]: CurrencyCodes.DJF, [fn(5686).CountryCodes.DK]: CurrencyCodes.DKK, [fn(5686).CountryCodes.DM]: CurrencyCodes.XCD, [fn(5686).CountryCodes.DO]: CurrencyCodes.DOP, [fn(5686).CountryCodes.DZ]: CurrencyCodes.DZD, [fn(5686).CountryCodes.EC]: CurrencyCodes.USD, [fn(5686).CountryCodes.EE]: CurrencyCodes.EUR, [fn(5686).CountryCodes.EG]: CurrencyCodes.EGP, [fn(5686).CountryCodes.EH]: CurrencyCodes.MAD, [fn(5686).CountryCodes.ER]: CurrencyCodes.ERN, [fn(5686).CountryCodes.ES]: CurrencyCodes.EUR, [fn(5686).CountryCodes.ET]: CurrencyCodes.ETB, [fn(5686).CountryCodes.FI]: CurrencyCodes.EUR, [fn(5686).CountryCodes.FJ]: CurrencyCodes.FJD, [fn(5686).CountryCodes.FK]: CurrencyCodes.FKP, [fn(5686).CountryCodes.FM]: CurrencyCodes.USD, [fn(5686).CountryCodes.FO]: CurrencyCodes.DKK, [fn(5686).CountryCodes.FR]: CurrencyCodes.EUR, [fn(5686).CountryCodes.GA]: CurrencyCodes.XAF, [fn(5686).CountryCodes.GB]: CurrencyCodes.GBP, [fn(5686).CountryCodes.GD]: CurrencyCodes.XCD, [fn(5686).CountryCodes.GE]: CurrencyCodes.GEL, [fn(5686).CountryCodes.GF]: CurrencyCodes.EUR, [fn(5686).CountryCodes.GG]: CurrencyCodes.GBP, [fn(5686).CountryCodes.GH]: CurrencyCodes.GHS, [fn(5686).CountryCodes.GI]: CurrencyCodes.GIP, [fn(5686).CountryCodes.GL]: CurrencyCodes.DKK, [fn(5686).CountryCodes.GM]: CurrencyCodes.GMD, [fn(5686).CountryCodes.GN]: CurrencyCodes.GNF, [fn(5686).CountryCodes.GP]: CurrencyCodes.EUR, [fn(5686).CountryCodes.GQ]: CurrencyCodes.XAF, [fn(5686).CountryCodes.GR]: CurrencyCodes.EUR, [fn(5686).CountryCodes.GS]: CurrencyCodes.GBP, [fn(5686).CountryCodes.GT]: CurrencyCodes.GTQ, [fn(5686).CountryCodes.GU]: CurrencyCodes.USD, [fn(5686).CountryCodes.GW]: CurrencyCodes.XOF, [fn(5686).CountryCodes.GY]: CurrencyCodes.GYD, [fn(5686).CountryCodes.HK]: CurrencyCodes.HKD, [fn(5686).CountryCodes.HM]: CurrencyCodes.AUD, [fn(5686).CountryCodes.HN]: CurrencyCodes.HNL, [fn(5686).CountryCodes.HR]: CurrencyCodes.EUR, [fn(5686).CountryCodes.HT]: CurrencyCodes.HTG, [fn(5686).CountryCodes.HU]: CurrencyCodes.HUF, [fn(5686).CountryCodes.ID]: CurrencyCodes.IDR, [fn(5686).CountryCodes.IE]: CurrencyCodes.EUR, [fn(5686).CountryCodes.IL]: CurrencyCodes.ILS, [fn(5686).CountryCodes.IM]: CurrencyCodes.GBP, [fn(5686).CountryCodes.IN]: CurrencyCodes.INR, [fn(5686).CountryCodes.IO]: CurrencyCodes.USD, [fn(5686).CountryCodes.IQ]: CurrencyCodes.IQD, [fn(5686).CountryCodes.IR]: CurrencyCodes.IRR, [fn(5686).CountryCodes.IS]: CurrencyCodes.ISK, [fn(5686).CountryCodes.IT]: CurrencyCodes.EUR, [fn(5686).CountryCodes.JE]: CurrencyCodes.GBP, [fn(5686).CountryCodes.JM]: CurrencyCodes.JMD, [fn(5686).CountryCodes.JO]: CurrencyCodes.JOD, [fn(5686).CountryCodes.JP]: CurrencyCodes.JPY, [fn(5686).CountryCodes.KE]: CurrencyCodes.KES, [fn(5686).CountryCodes.KG]: CurrencyCodes.KGS, [fn(5686).CountryCodes.KH]: CurrencyCodes.KHR, [fn(5686).CountryCodes.KI]: CurrencyCodes.AUD, [fn(5686).CountryCodes.KM]: CurrencyCodes.KMF, [fn(5686).CountryCodes.KN]: CurrencyCodes.XCD, [fn(5686).CountryCodes.KP]: CurrencyCodes.KPW, [fn(5686).CountryCodes.KR]: CurrencyCodes.KRW, [fn(5686).CountryCodes.KW]: CurrencyCodes.KWD, [fn(5686).CountryCodes.KY]: CurrencyCodes.KYD, [fn(5686).CountryCodes.KZ]: CurrencyCodes.KZT, [fn(5686).CountryCodes.LA]: CurrencyCodes.LAK, [fn(5686).CountryCodes.LB]: CurrencyCodes.LBP, [fn(5686).CountryCodes.LC]: CurrencyCodes.XCD, [fn(5686).CountryCodes.LI]: CurrencyCodes.CHF, [fn(5686).CountryCodes.LK]: CurrencyCodes.LKR, [fn(5686).CountryCodes.LR]: CurrencyCodes.LRD, [fn(5686).CountryCodes.LS]: CurrencyCodes.LSL, [fn(5686).CountryCodes.LT]: CurrencyCodes.EUR, [fn(5686).CountryCodes.LU]: CurrencyCodes.EUR, [fn(5686).CountryCodes.LV]: CurrencyCodes.EUR, [fn(5686).CountryCodes.LY]: CurrencyCodes.LYD, [fn(5686).CountryCodes.MA]: CurrencyCodes.MAD, [fn(5686).CountryCodes.MC]: CurrencyCodes.EUR, [fn(5686).CountryCodes.MD]: CurrencyCodes.MDL, [fn(5686).CountryCodes.ME]: CurrencyCodes.EUR, [fn(5686).CountryCodes.MF]: CurrencyCodes.EUR, [fn(5686).CountryCodes.MG]: CurrencyCodes.MGA, [fn(5686).CountryCodes.MH]: CurrencyCodes.USD, [fn(5686).CountryCodes.MK]: CurrencyCodes.MKD, [fn(5686).CountryCodes.ML]: CurrencyCodes.XOF, [fn(5686).CountryCodes.MM]: CurrencyCodes.MMK, [fn(5686).CountryCodes.MN]: CurrencyCodes.MNT, [fn(5686).CountryCodes.MO]: CurrencyCodes.MOP, [fn(5686).CountryCodes.MP]: CurrencyCodes.USD, [fn(5686).CountryCodes.MQ]: CurrencyCodes.EUR, [fn(5686).CountryCodes.MS]: CurrencyCodes.XCD, [fn(5686).CountryCodes.MT]: CurrencyCodes.EUR, [fn(5686).CountryCodes.MU]: CurrencyCodes.MUR, [fn(5686).CountryCodes.MV]: CurrencyCodes.MVR, [fn(5686).CountryCodes.MW]: CurrencyCodes.MWK, [fn(5686).CountryCodes.MX]: CurrencyCodes.MXN, [fn(5686).CountryCodes.MY]: CurrencyCodes.MYR, [fn(5686).CountryCodes.MZ]: CurrencyCodes.MZN, [fn(5686).CountryCodes.NA]: CurrencyCodes.NAD, [fn(5686).CountryCodes.NC]: CurrencyCodes.XPF, [fn(5686).CountryCodes.NE]: CurrencyCodes.XOF, [fn(5686).CountryCodes.NF]: CurrencyCodes.AUD, [fn(5686).CountryCodes.NG]: CurrencyCodes.NGN, [fn(5686).CountryCodes.NI]: CurrencyCodes.NIO, [fn(5686).CountryCodes.NL]: CurrencyCodes.EUR, [fn(5686).CountryCodes.NO]: CurrencyCodes.NOK, [fn(5686).CountryCodes.NP]: CurrencyCodes.NPR, [fn(5686).CountryCodes.NR]: CurrencyCodes.AUD, [fn(5686).CountryCodes.NU]: CurrencyCodes.NZD, [fn(5686).CountryCodes.NZ]: CurrencyCodes.NZD, [fn(5686).CountryCodes.OM]: CurrencyCodes.OMR, [fn(5686).CountryCodes.PA]: CurrencyCodes.PAB, [fn(5686).CountryCodes.PE]: CurrencyCodes.PEN, [fn(5686).CountryCodes.PF]: CurrencyCodes.XPF, [fn(5686).CountryCodes.PG]: CurrencyCodes.PGK, [fn(5686).CountryCodes.PH]: CurrencyCodes.PHP, [fn(5686).CountryCodes.PK]: CurrencyCodes.PKR, [fn(5686).CountryCodes.PL]: CurrencyCodes.PLN, [fn(5686).CountryCodes.PM]: CurrencyCodes.EUR, [fn(5686).CountryCodes.PN]: CurrencyCodes.NZD, [fn(5686).CountryCodes.PR]: CurrencyCodes.USD, [fn(5686).CountryCodes.PS]: CurrencyCodes.ILS, [fn(5686).CountryCodes.PT]: CurrencyCodes.EUR, [fn(5686).CountryCodes.PW]: CurrencyCodes.USD, [fn(5686).CountryCodes.PY]: CurrencyCodes.PYG, [fn(5686).CountryCodes.QA]: CurrencyCodes.QAR, [fn(5686).CountryCodes.RE]: CurrencyCodes.EUR, [fn(5686).CountryCodes.RO]: CurrencyCodes.RON, [fn(5686).CountryCodes.RS]: CurrencyCodes.RSD, [fn(5686).CountryCodes.RU]: CurrencyCodes.RUB, [fn(5686).CountryCodes.RW]: CurrencyCodes.RWF, [fn(5686).CountryCodes.SA]: CurrencyCodes.SAR, [fn(5686).CountryCodes.SB]: CurrencyCodes.SBD, [fn(5686).CountryCodes.SC]: CurrencyCodes.SCR, [fn(5686).CountryCodes.SD]: CurrencyCodes.SDG, [fn(5686).CountryCodes.SE]: CurrencyCodes.SEK, [fn(5686).CountryCodes.SG]: CurrencyCodes.SGD, [fn(5686).CountryCodes.SH]: CurrencyCodes.SHP, [fn(5686).CountryCodes.SI]: CurrencyCodes.EUR, [fn(5686).CountryCodes.SJ]: CurrencyCodes.NOK, [fn(5686).CountryCodes.SK]: CurrencyCodes.EUR, [fn(5686).CountryCodes.SM]: CurrencyCodes.EUR, [fn(5686).CountryCodes.SN]: CurrencyCodes.XOF, [fn(5686).CountryCodes.SO]: CurrencyCodes.SOS, [fn(5686).CountryCodes.SS]: CurrencyCodes.SSP, [fn(5686).CountryCodes.SV]: CurrencyCodes.SVC, [fn(5686).CountryCodes.SX]: CurrencyCodes.ANG, [fn(5686).CountryCodes.SY]: CurrencyCodes.SYP, [fn(5686).CountryCodes.SZ]: CurrencyCodes.SZL, [fn(5686).CountryCodes.TC]: CurrencyCodes.USD, [fn(5686).CountryCodes.TD]: CurrencyCodes.XAF, [fn(5686).CountryCodes.TF]: CurrencyCodes.EUR, [fn(5686).CountryCodes.TG]: CurrencyCodes.XOF, [fn(5686).CountryCodes.TH]: CurrencyCodes.THB, [fn(5686).CountryCodes.TJ]: CurrencyCodes.TJS, [fn(5686).CountryCodes.TK]: CurrencyCodes.NZD, [fn(5686).CountryCodes.TL]: CurrencyCodes.USD, [fn(5686).CountryCodes.TM]: CurrencyCodes.TMT, [fn(5686).CountryCodes.TN]: CurrencyCodes.TND, [fn(5686).CountryCodes.TO]: CurrencyCodes.TOP, [fn(5686).CountryCodes.TR]: CurrencyCodes.TRY, [fn(5686).CountryCodes.TT]: CurrencyCodes.TTD, [fn(5686).CountryCodes.TV]: CurrencyCodes.AUD, [fn(5686).CountryCodes.TW]: CurrencyCodes.TWD, [fn(5686).CountryCodes.TZ]: CurrencyCodes.TZS, [fn(5686).CountryCodes.UA]: CurrencyCodes.UAH, [fn(5686).CountryCodes.UG]: CurrencyCodes.UGX, [fn(5686).CountryCodes.UM]: CurrencyCodes.USD, [fn(5686).CountryCodes.US]: CurrencyCodes.USD, [fn(5686).CountryCodes.UY]: CurrencyCodes.UYU, [fn(5686).CountryCodes.UZ]: CurrencyCodes.UZS, [fn(5686).CountryCodes.VA]: CurrencyCodes.EUR, [fn(5686).CountryCodes.VC]: CurrencyCodes.XCD, [fn(5686).CountryCodes.VG]: CurrencyCodes.USD, [fn(5686).CountryCodes.VI]: CurrencyCodes.USD, [fn(5686).CountryCodes.VN]: CurrencyCodes.VND, [fn(5686).CountryCodes.VU]: CurrencyCodes.VUV, [fn(5686).CountryCodes.WF]: CurrencyCodes.XPF, [fn(5686).CountryCodes.WS]: CurrencyCodes.WST, [fn(5686).CountryCodes.YE]: CurrencyCodes.YER, [fn(5686).CountryCodes.YT]: CurrencyCodes.EUR, [fn(5686).CountryCodes.ZA]: CurrencyCodes.ZAR, [fn(5686).CountryCodes.ZM]: CurrencyCodes.ZMW };
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/PriceUtils.tsx");

export (result, currency, localeOverride, arg3) => {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  if (currency === CurrencyCodes.DISCORD_ORB) {
    return result.toString();
  } else {
    const convertToMajorUnits = obj.convertToMajorUnits;
    const tmp5 = _objectWithoutProperties(obj, closure_2);
    let tmp6;
    if (currency === tmp.IDR) {
      tmp6 = obj[currency];
    }
    obj2 = { style: "currency", currency };
    let tmp9;
    if (null != tmp6) {
      const obj3 = { minimumFractionDigits: tmp6, maximumFractionDigits: tmp6 };
      tmp9 = obj3;
    }
    const merged = Object.assign(tmp9);
    const merged1 = Object.assign(tmp5);
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const combined = "" + localeOverride + "|" + JSON.stringify(obj2);
    value = map.get(combined);
    if (null == value) {
      const _Intl = Intl;
      const NumberFormatResult = Intl.NumberFormat(localeOverride, obj2);
      result = map.set(combined, NumberFormatResult);
      value = NumberFormatResult;
    }
    let toNumberResult = result;
    if (tmp2) {
      if (typeof convertToMajorCurrencyUnits === "function") {
        if (null == obj[currency]) {
          const _Error = Error;
          const _HermesInternal2 = HermesInternal;
          const error = new Error("Unexpected currency " + currency);
          throw error;
        } else {
          const obj6 = new addDefault(result);
          toNumberResult = obj6.dividedBy(10 ** tmp24).toNumber();
          const dividedByResult = obj6.dividedBy(10 ** tmp24);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.format(toNumberResult);
  }
}
export { CurrencyExponents };
export { convertToMajorCurrencyUnits };
export (arg0, currencyCode) => {
  if (null == obj[currencyCode]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unexpected currency " + currencyCode);
    throw error;
  } else {
    obj = new addDefault(arg0);
    return obj.times(10 ** tmp).toNumber();
  }
}
export (arg0, arg1) => {
  if (null == obj[arg1]) {
    return null;
  } else {
    const _Math = Math;
    return Math.floor(arg0 / 10 ** tmp) * 10 ** tmp;
  }
}
export (str) => {
  const USD = CurrencyCodes.USD;
  [r10010, str] = str.split("-");
  let tmp2 = USD;
  if (undefined !== str) {
    let tmp4 = obj2[str.toUpperCase(str)];
    if (tmp4 == null) {
      tmp4 = USD;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}