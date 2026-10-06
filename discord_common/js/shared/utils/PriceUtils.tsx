// discord_common/js/shared/utils/PriceUtils.tsx
import Constants from "../Constants.tsx";
import CountryCodes from "../shared-constants/CountryCodes.tsx";
import _modDef6752 from "../../../../_runtime/metro/06752__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ["convertToMajorUnits"];
const CurrencyCodes = Constants.CurrencyCodes;
const map = new Map();
const CurrencyExponents = {
  [CurrencyCodes.AED]: 2,
  [CurrencyCodes.AFN]: 2,
  [CurrencyCodes.ALL]: 2,
  [CurrencyCodes.AMD]: 2,
  [CurrencyCodes.ANG]: 2,
  [CurrencyCodes.AOA]: 2,
  [CurrencyCodes.ARS]: 2,
  [CurrencyCodes.AUD]: 2,
  [CurrencyCodes.AWG]: 2,
  [CurrencyCodes.AZN]: 2,
  [CurrencyCodes.BAM]: 2,
  [CurrencyCodes.BBD]: 2,
  [CurrencyCodes.BDT]: 2,
  [CurrencyCodes.BGN]: 2,
  [CurrencyCodes.BHD]: 3,
  [CurrencyCodes.BIF]: 0,
  [CurrencyCodes.BMD]: 2,
  [CurrencyCodes.BND]: 2,
  [CurrencyCodes.BOB]: 2,
  [CurrencyCodes.BOV]: 2,
  [CurrencyCodes.BRL]: 2,
  [CurrencyCodes.BSD]: 2,
  [CurrencyCodes.BTN]: 2,
  [CurrencyCodes.BWP]: 2,
  [CurrencyCodes.BYR]: 0,
  [CurrencyCodes.BYN]: 2,
  [CurrencyCodes.BZD]: 2,
  [CurrencyCodes.CAD]: 2,
  [CurrencyCodes.CDF]: 2,
  [CurrencyCodes.CHE]: 2,
  [CurrencyCodes.CHF]: 2,
  [CurrencyCodes.CHW]: 2,
  [CurrencyCodes.CLF]: 0,
  [CurrencyCodes.CLP]: 0,
  [CurrencyCodes.CNY]: 2,
  [CurrencyCodes.COP]: 2,
  [CurrencyCodes.COU]: 2,
  [CurrencyCodes.CRC]: 2,
  [CurrencyCodes.CUC]: 2,
  [CurrencyCodes.CUP]: 2,
  [CurrencyCodes.CVE]: 2,
  [CurrencyCodes.CZK]: 2,
  [CurrencyCodes.DJF]: 0,
  [CurrencyCodes.DKK]: 2,
  [CurrencyCodes.DOP]: 2,
  [CurrencyCodes.DZD]: 2,
  [CurrencyCodes.EGP]: 2,
  [CurrencyCodes.ERN]: 2,
  [CurrencyCodes.ETB]: 2,
  [CurrencyCodes.EUR]: 2,
  [CurrencyCodes.FJD]: 2,
  [CurrencyCodes.FKP]: 2,
  [CurrencyCodes.GBP]: 2,
  [CurrencyCodes.GEL]: 2,
  [CurrencyCodes.GHS]: 2,
  [CurrencyCodes.GIP]: 2,
  [CurrencyCodes.GMD]: 2,
  [CurrencyCodes.GNF]: 0,
  [CurrencyCodes.GTQ]: 2,
  [CurrencyCodes.GYD]: 2,
  [CurrencyCodes.HKD]: 2,
  [CurrencyCodes.HNL]: 2,
  [CurrencyCodes.HRK]: 2,
  [CurrencyCodes.HTG]: 2,
  [CurrencyCodes.HUF]: 2,
  [CurrencyCodes.IDR]: 2,
  [CurrencyCodes.ILS]: 2,
  [CurrencyCodes.INR]: 2,
  [CurrencyCodes.IQD]: 3,
  [CurrencyCodes.IRR]: 2,
  [CurrencyCodes.ISK]: 0,
  [CurrencyCodes.JMD]: 2,
  [CurrencyCodes.JOD]: 3,
  [CurrencyCodes.JPY]: 0,
  [CurrencyCodes.KES]: 2,
  [CurrencyCodes.KGS]: 2,
  [CurrencyCodes.KHR]: 2,
  [CurrencyCodes.KMF]: 0,
  [CurrencyCodes.KPW]: 2,
  [CurrencyCodes.KRW]: 0,
  [CurrencyCodes.KWD]: 3,
  [CurrencyCodes.KYD]: 2,
  [CurrencyCodes.KZT]: 2,
  [CurrencyCodes.LAK]: 2,
  [CurrencyCodes.LBP]: 2,
  [CurrencyCodes.LKR]: 2,
  [CurrencyCodes.LRD]: 2,
  [CurrencyCodes.LSL]: 2,
  [CurrencyCodes.LTL]: 2,
  [CurrencyCodes.LVL]: 2,
  [CurrencyCodes.LYD]: 3,
  [CurrencyCodes.MAD]: 2,
  [CurrencyCodes.MDL]: 2,
  [CurrencyCodes.MGA]: 2,
  [CurrencyCodes.MKD]: 2,
  [CurrencyCodes.MMK]: 2,
  [CurrencyCodes.MNT]: 2,
  [CurrencyCodes.MOP]: 2,
  [CurrencyCodes.MRO]: 2,
  [CurrencyCodes.MUR]: 2,
  [CurrencyCodes.MVR]: 2,
  [CurrencyCodes.MWK]: 2,
  [CurrencyCodes.MXN]: 2,
  [CurrencyCodes.MXV]: 2,
  [CurrencyCodes.MYR]: 2,
  [CurrencyCodes.MZN]: 2,
  [CurrencyCodes.NAD]: 2,
  [CurrencyCodes.NGN]: 2,
  [CurrencyCodes.NIO]: 2,
  [CurrencyCodes.NOK]: 2,
  [CurrencyCodes.NPR]: 2,
  [CurrencyCodes.NZD]: 2,
  [CurrencyCodes.OMR]: 3,
  [CurrencyCodes.PAB]: 2,
  [CurrencyCodes.PEN]: 2,
  [CurrencyCodes.PGK]: 2,
  [CurrencyCodes.PHP]: 2,
  [CurrencyCodes.PKR]: 2,
  [CurrencyCodes.PLN]: 2,
  [CurrencyCodes.PYG]: 0,
  [CurrencyCodes.QAR]: 2,
  [CurrencyCodes.RON]: 2,
  [CurrencyCodes.RSD]: 2,
  [CurrencyCodes.RUB]: 2,
  [CurrencyCodes.RWF]: 0,
  [CurrencyCodes.SAR]: 2,
  [CurrencyCodes.SBD]: 2,
  [CurrencyCodes.SCR]: 2,
  [CurrencyCodes.SDG]: 2,
  [CurrencyCodes.SEK]: 2,
  [CurrencyCodes.SGD]: 2,
  [CurrencyCodes.SHP]: 2,
  [CurrencyCodes.SLL]: 2,
  [CurrencyCodes.SOS]: 2,
  [CurrencyCodes.SRD]: 2,
  [CurrencyCodes.SSP]: 2,
  [CurrencyCodes.STD]: 2,
  [CurrencyCodes.SVC]: 2,
  [CurrencyCodes.SYP]: 2,
  [CurrencyCodes.SZL]: 2,
  [CurrencyCodes.THB]: 2,
  [CurrencyCodes.TJS]: 2,
  [CurrencyCodes.TMT]: 2,
  [CurrencyCodes.TND]: 3,
  [CurrencyCodes.TOP]: 2,
  [CurrencyCodes.TRY]: 2,
  [CurrencyCodes.TTD]: 2,
  [CurrencyCodes.TWD]: 2,
  [CurrencyCodes.TZS]: 2,
  [CurrencyCodes.UAH]: 2,
  [CurrencyCodes.UGX]: 0,
  [CurrencyCodes.USD]: 2,
  [CurrencyCodes.USN]: 2,
  [CurrencyCodes.USS]: 2,
  [CurrencyCodes.UYI]: 0,
  [CurrencyCodes.UYU]: 2,
  [CurrencyCodes.UZS]: 2,
  [CurrencyCodes.VEF]: 2,
  [CurrencyCodes.VND]: 0,
  [CurrencyCodes.VUV]: 0,
  [CurrencyCodes.WST]: 2,
  [CurrencyCodes.XAF]: 0,
  [CurrencyCodes.XAG]: 0,
  [CurrencyCodes.XAU]: 0,
  [CurrencyCodes.XBA]: 0,
  [CurrencyCodes.XBB]: 0,
  [CurrencyCodes.XBC]: 0,
  [CurrencyCodes.XBD]: 0,
  [CurrencyCodes.XCD]: 2,
  [CurrencyCodes.XDR]: 0,
  [CurrencyCodes.XFU]: 0,
  [CurrencyCodes.XOF]: 0,
  [CurrencyCodes.XPD]: 0,
  [CurrencyCodes.XPF]: 0,
  [CurrencyCodes.XPT]: 0,
  [CurrencyCodes.XSU]: 0,
  [CurrencyCodes.XTS]: 0,
  [CurrencyCodes.XUA]: 0,
  [CurrencyCodes.YER]: 2,
  [CurrencyCodes.ZAR]: 2,
  [CurrencyCodes.ZMW]: 2,
  [CurrencyCodes.ZWL]: 2,
  [CurrencyCodes.DISCORD_ORB]: 0,
};
function convertToMajorCurrencyUnits(diff1, USD) {
  let obj;
  if (null == obj[USD]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self3 = this;
    const self4 = this;
    const error = new Error("Unexpected currency " + USD);
    throw error;
  } else {
    const self = this;
    const self2 = this;
    obj = new _modDef6752(diff1);
    const dividedByResult = obj.dividedBy(10 ** obj[USD]);
    return dividedByResult.toNumber();
  }
}
let obj2 = {
  [CountryCodes.CountryCodes.AD]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.AE]: CurrencyCodes.AED,
  [CountryCodes.CountryCodes.AF]: CurrencyCodes.AFN,
  [CountryCodes.CountryCodes.AG]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.AI]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.AL]: CurrencyCodes.ALL,
  [CountryCodes.CountryCodes.AM]: CurrencyCodes.AMD,
  [CountryCodes.CountryCodes.AO]: CurrencyCodes.AOA,
  [CountryCodes.CountryCodes.AQ]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.AR]: CurrencyCodes.ARS,
  [CountryCodes.CountryCodes.AS]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.AT]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.AU]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.AW]: CurrencyCodes.AWG,
  [CountryCodes.CountryCodes.AX]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.AZ]: CurrencyCodes.AZN,
  [CountryCodes.CountryCodes.BA]: CurrencyCodes.BAM,
  [CountryCodes.CountryCodes.BB]: CurrencyCodes.BBD,
  [CountryCodes.CountryCodes.BD]: CurrencyCodes.BDT,
  [CountryCodes.CountryCodes.BE]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.BF]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.BG]: CurrencyCodes.BGN,
  [CountryCodes.CountryCodes.BH]: CurrencyCodes.BHD,
  [CountryCodes.CountryCodes.BI]: CurrencyCodes.BIF,
  [CountryCodes.CountryCodes.BJ]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.BL]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.BM]: CurrencyCodes.BMD,
  [CountryCodes.CountryCodes.BN]: CurrencyCodes.BND,
  [CountryCodes.CountryCodes.BO]: CurrencyCodes.BOB,
  [CountryCodes.CountryCodes.BQ]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.BR]: CurrencyCodes.BRL,
  [CountryCodes.CountryCodes.BS]: CurrencyCodes.BSD,
  [CountryCodes.CountryCodes.BT]: CurrencyCodes.BTN,
  [CountryCodes.CountryCodes.BV]: CurrencyCodes.NOK,
  [CountryCodes.CountryCodes.BW]: CurrencyCodes.BWP,
  [CountryCodes.CountryCodes.BY]: CurrencyCodes.BYN,
  [CountryCodes.CountryCodes.BZ]: CurrencyCodes.BZD,
  [CountryCodes.CountryCodes.CA]: CurrencyCodes.CAD,
  [CountryCodes.CountryCodes.CC]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.CD]: CurrencyCodes.CDF,
  [CountryCodes.CountryCodes.CF]: CurrencyCodes.XAF,
  [CountryCodes.CountryCodes.CG]: CurrencyCodes.XAF,
  [CountryCodes.CountryCodes.CH]: CurrencyCodes.CHF,
  [CountryCodes.CountryCodes.CI]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.CK]: CurrencyCodes.NZD,
  [CountryCodes.CountryCodes.CL]: CurrencyCodes.CLP,
  [CountryCodes.CountryCodes.CM]: CurrencyCodes.XAF,
  [CountryCodes.CountryCodes.CN]: CurrencyCodes.CNY,
  [CountryCodes.CountryCodes.CO]: CurrencyCodes.COP,
  [CountryCodes.CountryCodes.CR]: CurrencyCodes.CRC,
  [CountryCodes.CountryCodes.CU]: CurrencyCodes.CUP,
  [CountryCodes.CountryCodes.CV]: CurrencyCodes.CVE,
  [CountryCodes.CountryCodes.CW]: CurrencyCodes.ANG,
  [CountryCodes.CountryCodes.CX]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.CY]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.CZ]: CurrencyCodes.CZK,
  [CountryCodes.CountryCodes.DE]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.DJ]: CurrencyCodes.DJF,
  [CountryCodes.CountryCodes.DK]: CurrencyCodes.DKK,
  [CountryCodes.CountryCodes.DM]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.DO]: CurrencyCodes.DOP,
  [CountryCodes.CountryCodes.DZ]: CurrencyCodes.DZD,
  [CountryCodes.CountryCodes.EC]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.EE]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.EG]: CurrencyCodes.EGP,
  [CountryCodes.CountryCodes.EH]: CurrencyCodes.MAD,
  [CountryCodes.CountryCodes.ER]: CurrencyCodes.ERN,
  [CountryCodes.CountryCodes.ES]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.ET]: CurrencyCodes.ETB,
  [CountryCodes.CountryCodes.FI]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.FJ]: CurrencyCodes.FJD,
  [CountryCodes.CountryCodes.FK]: CurrencyCodes.FKP,
  [CountryCodes.CountryCodes.FM]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.FO]: CurrencyCodes.DKK,
  [CountryCodes.CountryCodes.FR]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.GA]: CurrencyCodes.XAF,
  [CountryCodes.CountryCodes.GB]: CurrencyCodes.GBP,
  [CountryCodes.CountryCodes.GD]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.GE]: CurrencyCodes.GEL,
  [CountryCodes.CountryCodes.GF]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.GG]: CurrencyCodes.GBP,
  [CountryCodes.CountryCodes.GH]: CurrencyCodes.GHS,
  [CountryCodes.CountryCodes.GI]: CurrencyCodes.GIP,
  [CountryCodes.CountryCodes.GL]: CurrencyCodes.DKK,
  [CountryCodes.CountryCodes.GM]: CurrencyCodes.GMD,
  [CountryCodes.CountryCodes.GN]: CurrencyCodes.GNF,
  [CountryCodes.CountryCodes.GP]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.GQ]: CurrencyCodes.XAF,
  [CountryCodes.CountryCodes.GR]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.GS]: CurrencyCodes.GBP,
  [CountryCodes.CountryCodes.GT]: CurrencyCodes.GTQ,
  [CountryCodes.CountryCodes.GU]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.GW]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.GY]: CurrencyCodes.GYD,
  [CountryCodes.CountryCodes.HK]: CurrencyCodes.HKD,
  [CountryCodes.CountryCodes.HM]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.HN]: CurrencyCodes.HNL,
  [CountryCodes.CountryCodes.HR]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.HT]: CurrencyCodes.HTG,
  [CountryCodes.CountryCodes.HU]: CurrencyCodes.HUF,
  [CountryCodes.CountryCodes.ID]: CurrencyCodes.IDR,
  [CountryCodes.CountryCodes.IE]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.IL]: CurrencyCodes.ILS,
  [CountryCodes.CountryCodes.IM]: CurrencyCodes.GBP,
  [CountryCodes.CountryCodes.IN]: CurrencyCodes.INR,
  [CountryCodes.CountryCodes.IO]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.IQ]: CurrencyCodes.IQD,
  [CountryCodes.CountryCodes.IR]: CurrencyCodes.IRR,
  [CountryCodes.CountryCodes.IS]: CurrencyCodes.ISK,
  [CountryCodes.CountryCodes.IT]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.JE]: CurrencyCodes.GBP,
  [CountryCodes.CountryCodes.JM]: CurrencyCodes.JMD,
  [CountryCodes.CountryCodes.JO]: CurrencyCodes.JOD,
  [CountryCodes.CountryCodes.JP]: CurrencyCodes.JPY,
  [CountryCodes.CountryCodes.KE]: CurrencyCodes.KES,
  [CountryCodes.CountryCodes.KG]: CurrencyCodes.KGS,
  [CountryCodes.CountryCodes.KH]: CurrencyCodes.KHR,
  [CountryCodes.CountryCodes.KI]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.KM]: CurrencyCodes.KMF,
  [CountryCodes.CountryCodes.KN]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.KP]: CurrencyCodes.KPW,
  [CountryCodes.CountryCodes.KR]: CurrencyCodes.KRW,
  [CountryCodes.CountryCodes.KW]: CurrencyCodes.KWD,
  [CountryCodes.CountryCodes.KY]: CurrencyCodes.KYD,
  [CountryCodes.CountryCodes.KZ]: CurrencyCodes.KZT,
  [CountryCodes.CountryCodes.LA]: CurrencyCodes.LAK,
  [CountryCodes.CountryCodes.LB]: CurrencyCodes.LBP,
  [CountryCodes.CountryCodes.LC]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.LI]: CurrencyCodes.CHF,
  [CountryCodes.CountryCodes.LK]: CurrencyCodes.LKR,
  [CountryCodes.CountryCodes.LR]: CurrencyCodes.LRD,
  [CountryCodes.CountryCodes.LS]: CurrencyCodes.LSL,
  [CountryCodes.CountryCodes.LT]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.LU]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.LV]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.LY]: CurrencyCodes.LYD,
  [CountryCodes.CountryCodes.MA]: CurrencyCodes.MAD,
  [CountryCodes.CountryCodes.MC]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.MD]: CurrencyCodes.MDL,
  [CountryCodes.CountryCodes.ME]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.MF]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.MG]: CurrencyCodes.MGA,
  [CountryCodes.CountryCodes.MH]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.MK]: CurrencyCodes.MKD,
  [CountryCodes.CountryCodes.ML]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.MM]: CurrencyCodes.MMK,
  [CountryCodes.CountryCodes.MN]: CurrencyCodes.MNT,
  [CountryCodes.CountryCodes.MO]: CurrencyCodes.MOP,
  [CountryCodes.CountryCodes.MP]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.MQ]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.MS]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.MT]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.MU]: CurrencyCodes.MUR,
  [CountryCodes.CountryCodes.MV]: CurrencyCodes.MVR,
  [CountryCodes.CountryCodes.MW]: CurrencyCodes.MWK,
  [CountryCodes.CountryCodes.MX]: CurrencyCodes.MXN,
  [CountryCodes.CountryCodes.MY]: CurrencyCodes.MYR,
  [CountryCodes.CountryCodes.MZ]: CurrencyCodes.MZN,
  [CountryCodes.CountryCodes.NA]: CurrencyCodes.NAD,
  [CountryCodes.CountryCodes.NC]: CurrencyCodes.XPF,
  [CountryCodes.CountryCodes.NE]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.NF]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.NG]: CurrencyCodes.NGN,
  [CountryCodes.CountryCodes.NI]: CurrencyCodes.NIO,
  [CountryCodes.CountryCodes.NL]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.NO]: CurrencyCodes.NOK,
  [CountryCodes.CountryCodes.NP]: CurrencyCodes.NPR,
  [CountryCodes.CountryCodes.NR]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.NU]: CurrencyCodes.NZD,
  [CountryCodes.CountryCodes.NZ]: CurrencyCodes.NZD,
  [CountryCodes.CountryCodes.OM]: CurrencyCodes.OMR,
  [CountryCodes.CountryCodes.PA]: CurrencyCodes.PAB,
  [CountryCodes.CountryCodes.PE]: CurrencyCodes.PEN,
  [CountryCodes.CountryCodes.PF]: CurrencyCodes.XPF,
  [CountryCodes.CountryCodes.PG]: CurrencyCodes.PGK,
  [CountryCodes.CountryCodes.PH]: CurrencyCodes.PHP,
  [CountryCodes.CountryCodes.PK]: CurrencyCodes.PKR,
  [CountryCodes.CountryCodes.PL]: CurrencyCodes.PLN,
  [CountryCodes.CountryCodes.PM]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.PN]: CurrencyCodes.NZD,
  [CountryCodes.CountryCodes.PR]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.PS]: CurrencyCodes.ILS,
  [CountryCodes.CountryCodes.PT]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.PW]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.PY]: CurrencyCodes.PYG,
  [CountryCodes.CountryCodes.QA]: CurrencyCodes.QAR,
  [CountryCodes.CountryCodes.RE]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.RO]: CurrencyCodes.RON,
  [CountryCodes.CountryCodes.RS]: CurrencyCodes.RSD,
  [CountryCodes.CountryCodes.RU]: CurrencyCodes.RUB,
  [CountryCodes.CountryCodes.RW]: CurrencyCodes.RWF,
  [CountryCodes.CountryCodes.SA]: CurrencyCodes.SAR,
  [CountryCodes.CountryCodes.SB]: CurrencyCodes.SBD,
  [CountryCodes.CountryCodes.SC]: CurrencyCodes.SCR,
  [CountryCodes.CountryCodes.SD]: CurrencyCodes.SDG,
  [CountryCodes.CountryCodes.SE]: CurrencyCodes.SEK,
  [CountryCodes.CountryCodes.SG]: CurrencyCodes.SGD,
  [CountryCodes.CountryCodes.SH]: CurrencyCodes.SHP,
  [CountryCodes.CountryCodes.SI]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.SJ]: CurrencyCodes.NOK,
  [CountryCodes.CountryCodes.SK]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.SM]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.SN]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.SO]: CurrencyCodes.SOS,
  [CountryCodes.CountryCodes.SS]: CurrencyCodes.SSP,
  [CountryCodes.CountryCodes.SV]: CurrencyCodes.SVC,
  [CountryCodes.CountryCodes.SX]: CurrencyCodes.ANG,
  [CountryCodes.CountryCodes.SY]: CurrencyCodes.SYP,
  [CountryCodes.CountryCodes.SZ]: CurrencyCodes.SZL,
  [CountryCodes.CountryCodes.TC]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.TD]: CurrencyCodes.XAF,
  [CountryCodes.CountryCodes.TF]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.TG]: CurrencyCodes.XOF,
  [CountryCodes.CountryCodes.TH]: CurrencyCodes.THB,
  [CountryCodes.CountryCodes.TJ]: CurrencyCodes.TJS,
  [CountryCodes.CountryCodes.TK]: CurrencyCodes.NZD,
  [CountryCodes.CountryCodes.TL]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.TM]: CurrencyCodes.TMT,
  [CountryCodes.CountryCodes.TN]: CurrencyCodes.TND,
  [CountryCodes.CountryCodes.TO]: CurrencyCodes.TOP,
  [CountryCodes.CountryCodes.TR]: CurrencyCodes.TRY,
  [CountryCodes.CountryCodes.TT]: CurrencyCodes.TTD,
  [CountryCodes.CountryCodes.TV]: CurrencyCodes.AUD,
  [CountryCodes.CountryCodes.TW]: CurrencyCodes.TWD,
  [CountryCodes.CountryCodes.TZ]: CurrencyCodes.TZS,
  [CountryCodes.CountryCodes.UA]: CurrencyCodes.UAH,
  [CountryCodes.CountryCodes.UG]: CurrencyCodes.UGX,
  [CountryCodes.CountryCodes.UM]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.US]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.UY]: CurrencyCodes.UYU,
  [CountryCodes.CountryCodes.UZ]: CurrencyCodes.UZS,
  [CountryCodes.CountryCodes.VA]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.VC]: CurrencyCodes.XCD,
  [CountryCodes.CountryCodes.VG]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.VI]: CurrencyCodes.USD,
  [CountryCodes.CountryCodes.VN]: CurrencyCodes.VND,
  [CountryCodes.CountryCodes.VU]: CurrencyCodes.VUV,
  [CountryCodes.CountryCodes.WF]: CurrencyCodes.XPF,
  [CountryCodes.CountryCodes.WS]: CurrencyCodes.WST,
  [CountryCodes.CountryCodes.YE]: CurrencyCodes.YER,
  [CountryCodes.CountryCodes.YT]: CurrencyCodes.EUR,
  [CountryCodes.CountryCodes.ZA]: CurrencyCodes.ZAR,
  [CountryCodes.CountryCodes.ZM]: CurrencyCodes.ZMW,
};
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/PriceUtils.tsx");

export const formatPrice = function (result, currency, localeOverride, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  if (currency === CurrencyCodes.DISCORD_ORB) {
    return result.toString();
  } else {
    const convertToMajorUnits = obj.convertToMajorUnits;
    obj2 = { style: "currency", currency };
    const tmp = undefined === convertToMajorUnits || convertToMajorUnits;
    const merged = Object.assign(_objectWithoutProperties(obj, closure_2));
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const combined = "" + localeOverride + "|" + JSON.stringify(obj2);
    let value = map.get(combined);
    if (null == value) {
      const _Intl = Intl;
      const NumberFormatResult = Intl.NumberFormat(localeOverride, obj2);
      result = map.set(combined, NumberFormatResult);
      value = NumberFormatResult;
    }
    let toNumberResult = result;
    const format = value.format;
    if (tmp) {
      if (typeof convertToMajorCurrencyUnits === "function") {
        if (null == obj[currency]) {
          const _Error = Error;
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error = new Error("Unexpected currency " + currency);
          throw error;
        } else {
          const self = this;
          const self2 = this;
          const obj4 = new _modDef6752(result);
          const dividedByResult = obj4.dividedBy(10 ** obj[currency]);
          toNumberResult = dividedByResult.toNumber();
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return format(toNumberResult);
  }
};
export { CurrencyExponents };
export { convertToMajorCurrencyUnits };
export const convertToMinorCurrencyUnits = function (arg0, currencyCode) {
  let obj;
  if (null == obj[currencyCode]) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self3 = this;
    const self4 = this;
    const error = new Error("Unexpected currency " + currencyCode);
    throw error;
  } else {
    const self = this;
    const self2 = this;
    obj = new _modDef6752(arg0);
    const timesResult = obj.times(10 ** obj[currencyCode]);
    return timesResult.toNumber();
  }
};
export const floorToWholeCurrencyUnits = (arg0, arg1) => {
  if (null == obj[arg1]) {
    return null;
  } else {
    const _Math = Math;
    return Math.floor(arg0 / 10 ** obj[arg1]) * 10 ** obj[arg1];
  }
};
export const currencyCodeFromBCP47Locale = (str) => {
  const USD = CurrencyCodes.USD;
  const tmp = _slicedToArray(str.split("-"), 2);
  [r10010, str] = tmp;
  let tmp2 = USD;
  if (undefined !== str) {
    let tmp4 = obj2[str.toUpperCase(str)];
    if (tmp4 == null) {
      tmp4 = USD;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
