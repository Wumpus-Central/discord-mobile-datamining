// discord_app/records/PaymentSourceRecord.tsx
import hasFlag from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import isDiscordFrontendDevelopment from "../utils/GlobalUtils.tsx";
import toJSDefault from "../lib/Record.tsx";
import ME from "../Constants.tsx";

require = arg1;
toJSDefault;
({ IRREDEEMABLE_PAYMENT_SOURCES: obj1, PaymentGateways: c3, PaymentSourceTypes: c4 } = ME);
class PaymentSourceRecord extends tmp2 {
  constructor(arg0) {
    tmp5 = new PaymentSourceRecord(tmp4, tmp3, tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    values = Object.values(PaymentSourceTypes);
    if (values.includes(global.type)) {
      tmp10 = tmp5;
      ({ id: tmp5.id, type: tmp5.type, paymentGateway: tmp5.paymentGateway, invalid } = global);
      tmp11 = null;
      if (invalid == null) {
        invalid = false;
      }
      tmp5.invalid = invalid;
      billingAddress = global.billingAddress;
      if (billingAddress == null) {
        billingAddress = {};
      }
      tmp5.billingAddress = billingAddress;
      ({ isDefault: tmp5.isDefault, flags } = global);
      if (flags == null) {
        flags = 0;
      }
      tmp5.flags = flags;
      str2 = global.country;
      if (str2 == null) {
        str2 = "";
      }
      tmp5.country = str2;
      tmp5.pixMetadata = global.pixMetadata;
      return tmp5;
    } else {
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = "Unrecognized payment source type ";
      tmp6 = new.target;
      tmp7 = new.target;
      error = new Error("Unrecognized payment source type " + global.type);
      tmp9 = error;
      throw error;
    }
  }
}
const prototype = PaymentSourceRecord.prototype;
PaymentSourceRecord["createFromServer"] = function createFromServer(billing_address) {
  billing_address = billing_address.billing_address;
  if (billing_address == null) {
    billing_address = {};
  }
  obj = {
    id: billing_address.id,
    type: billing_address.type,
    paymentGateway: billing_address.payment_gateway,
    invalid: billing_address.invalid,
    isDefault: billing_address.default,
    billingAddress: obj,
    country: billing_address.country,
    flags: billing_address.flags,
    pixMetadata: null,
  };
  obj = {
    name: billing_address.name,
    line1: billing_address.line_1,
    line2: billing_address.line_2,
    city: billing_address.city,
    postalCode: billing_address.postal_code,
    state: billing_address.state,
    country: billing_address.country,
  };
  let tmp6;
  if (null != billing_address.pix) {
    obj1 = { taxId: null };
    obj1[0] = billing_address.pix.tax_id;
    tmp6 = obj1;
  }
  obj[8] = tmp6;
  const type = billing_address.type;
  const tmp7 = closure_4;
  if (closure_4.CARD === type) {
    let merged = CreditCardSourceRecord;
    const obj2 = {};
    merged = obj2;
    merged = obj;
    merged = Object.assign(obj);
    ({
      brand: obj24.brand,
      last_4: obj24.last4,
      expires_month: obj24.expiresMonth,
      expires_year: obj24.expiresYear,
    } = billing_address);
    merged = new.target;
    if (typeof CreditCardSourceRecord !== "function") {
      merged = HermesBuiltin.throwTypeError();
    }
    merged = CreditCardSourceRecord;
    merged = new.target;
    merged = new.target;
    merged = obj2;
    merged = new CreditCardSourceRecord(obj2, obj, tmp5, tmp4, tmp3);
    // ThrowIfThisInitialized (0x7c)
    if (obj2.type !== tmp7.CARD) {
      merged = globalThis;
      const _Error19 = Error;
      const _HermesInternal19 = HermesInternal;
      merged = new.target;
      merged = new.target;
      merged = new Error(
        "Cannot instantiate CreditCardSourceRecord with type: " + obj2.type + ", must be " + tmp7.CARD,
      );
      throw merged;
    } else {
      let str38 = obj2.brand;
      if (str38 == null) {
        str38 = "";
      }
      merged.brand = str38;
      let str39 = obj2.last4;
      if (str39 == null) {
        str39 = "";
      }
      merged.last4 = str39;
      let num = obj2.expiresMonth;
      if (num == null) {
        num = 0;
      }
      merged.expiresMonth = num;
      let num2 = obj2.expiresYear;
      if (num2 == null) {
        num2 = 0;
      }
      merged.expiresYear = num2;
      return merged;
    }
  } else if (tmp7.PAYPAL === type) {
    const obj3 = {};
    merged = obj3;
    merged = obj;
    merged = PaypalSourceRecord;
    merged = Object.assign(obj);
    obj3.email = billing_address.email;
    merged = new.target;
    if (typeof PaypalSourceRecord !== "function") {
      merged = HermesBuiltin.throwTypeError();
    }
    merged = PaypalSourceRecord;
    merged = new.target;
    merged = new.target;
    merged = obj3;
    merged = new PaypalSourceRecord(obj3, obj, tmp5, tmp4, tmp3, tmp2, merged, new.target, merged);
    // ThrowIfThisInitialized (0x7c)
    if (obj3.type !== tmp7.PAYPAL) {
      merged = globalThis;
      const _Error18 = Error;
      const _HermesInternal18 = HermesInternal;
      merged = new.target;
      merged = new.target;
      merged = new Error("Cannot instantiate PaypalSourceRecord with type: " + obj3.type + ", must be " + tmp7.PAYPAL);
      throw merged;
    } else {
      merged = obj3.email || "";
      merged.email = merged;
      return merged;
    }
  } else if (tmp7.VENMO === type) {
    let obj4 = {};
    merged = obj4;
    merged = obj;
    merged = VenmoSourceRecord;
    merged = Object.assign(obj);
    obj4.username = billing_address.username;
    merged = new.target;
    if (typeof VenmoSourceRecord !== "function") {
      merged = HermesBuiltin.throwTypeError();
    }
    merged = VenmoSourceRecord;
    merged = new.target;
    merged = new.target;
    merged = obj4;
    merged = new VenmoSourceRecord(obj4, obj, tmp5, tmp4, tmp3, tmp2, merged, new.target, merged);
    // ThrowIfThisInitialized (0x7c)
    if (obj4.type !== tmp7.VENMO) {
      merged = globalThis;
      const _Error17 = Error;
      const _HermesInternal17 = HermesInternal;
      merged = new.target;
      merged = new.target;
      merged = new Error("Cannot instantiate VenmoSourceRecord with type: " + obj4.type + ", must be " + tmp7.VENMO);
      throw merged;
    } else {
      merged = obj4.username || "";
      merged.username = merged;
      return merged;
    }
  } else {
    if (tmp7.SEPA_DEBIT !== type) {
      if (tmp7.SOFORT !== type) {
        if (tmp7.GIROPAY === type) {
          const obj5 = {};
          merged = obj5;
          merged = obj;
          merged = GiropaySourceRecord;
          merged = Object.assign(obj);
          merged = new.target;
          if (typeof GiropaySourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = GiropaySourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj5;
          merged = new GiropaySourceRecord(obj5, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj5.type !== tmp7.GIROPAY) {
            merged = globalThis;
            const _Error15 = Error;
            const _HermesInternal15 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate GiropaySourceRecord with type: " + obj5.type + ", must be " + tmp7.GIROPAY,
            );
            throw merged;
          } else {
            return merged;
          }
        } else if (tmp7.PRZELEWY24 === type) {
          const obj6 = {};
          merged = obj6;
          merged = obj;
          merged = Przelewy24SourceRecord;
          merged = Object.assign(obj);
          ({ email: obj19.email, bank: obj19.bank } = billing_address);
          merged = new.target;
          if (typeof Przelewy24SourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = Przelewy24SourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj6;
          merged = new Przelewy24SourceRecord(obj6, obj, tmp5, tmp4, tmp3, tmp2, merged, new.target, merged);
          // ThrowIfThisInitialized (0x7c)
          if (obj6.type !== tmp7.PRZELEWY24) {
            merged = globalThis;
            const _Error14 = Error;
            const _HermesInternal14 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate Przelewy24SourceRecord with type: " + obj6.type + ", must be " + tmp7.PRZELEWY24,
            );
            throw merged;
          } else {
            merged = obj6.email || "";
            merged.email = merged;
            merged.bank = obj6.bank;
            return merged;
          }
        } else if (tmp7.EPS === type) {
          const obj7 = {};
          merged = obj7;
          merged = obj;
          merged = EPSSourceRecord;
          merged = Object.assign(obj);
          obj7.bank = billing_address.bank;
          merged = new.target;
          if (typeof EPSSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = EPSSourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj7;
          merged = new EPSSourceRecord(obj7, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj7.type !== tmp7.EPS) {
            merged = globalThis;
            const _Error13 = Error;
            const _HermesInternal13 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error("Cannot instantiate EPSSourceRecord with type: " + obj7.type + ", must be " + tmp7.EPS);
            throw merged;
          } else {
            merged.bank = obj7.bank;
            return merged;
          }
        } else if (tmp7.PAYSAFE_CARD === type) {
          const obj8 = {};
          merged = obj8;
          merged = obj;
          merged = PaysafeSourceRecord;
          merged = Object.assign(obj);
          merged = new.target;
          if (typeof PaysafeSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = PaysafeSourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj8;
          merged = new PaysafeSourceRecord(obj8, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj8.type !== tmp7.PAYSAFE_CARD) {
            merged = globalThis;
            const _Error12 = Error;
            const _HermesInternal12 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate PaysafeSourceRecord with type: " + obj8.type + ", must be " + tmp7.PAYSAFE_CARD,
            );
            throw merged;
          } else {
            return merged;
          }
        } else if (tmp7.GCASH === type) {
          const obj9 = {};
          merged = obj9;
          merged = obj;
          merged = GcashSourceRecord;
          merged = Object.assign(obj);
          merged = new.target;
          if (typeof GcashSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = GcashSourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj9;
          merged = new GcashSourceRecord(obj9, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj9.type !== tmp7.GCASH) {
            merged = globalThis;
            const _Error11 = Error;
            const _HermesInternal11 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate GcashSourceRecord with type: " + obj9.type + ", must be " + tmp7.GCASH,
            );
            throw merged;
          } else {
            return merged;
          }
        } else if (tmp7.GRABPAY_MY === type) {
          const obj10 = {};
          merged = obj10;
          merged = obj;
          merged = GrabPayMySourceRecord;
          merged = Object.assign(obj);
          merged = new.target;
          if (typeof GrabPayMySourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = GrabPayMySourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj10;
          merged = new GrabPayMySourceRecord(obj10, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj10.type !== tmp7.GRABPAY_MY) {
            merged = globalThis;
            const _Error10 = Error;
            const _HermesInternal10 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate GrabPayMySourceRecord with type: " + obj10.type + ", must be " + tmp7.GRABPAY_MY,
            );
            throw merged;
          } else {
            return merged;
          }
        } else if (tmp7.MOMO_WALLET === type) {
          const obj11 = {};
          merged = obj11;
          merged = obj;
          merged = MomoWalletSourceRecord;
          merged = Object.assign(obj);
          merged = new.target;
          if (typeof MomoWalletSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = MomoWalletSourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj11;
          merged = new MomoWalletSourceRecord(obj11, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj11.type !== tmp7.MOMO_WALLET) {
            merged = globalThis;
            const _Error9 = Error;
            const _HermesInternal9 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate MomoWalletSourceRecord with type: " + obj11.type + ", must be " + tmp7.MOMO_WALLET,
            );
            throw merged;
          } else {
            return merged;
          }
        } else if (tmp7.KAKAOPAY === type) {
          const obj12 = {};
          merged = obj12;
          merged = obj;
          merged = KaKaoPaySourceRecord;
          merged = Object.assign(obj);
          merged = new.target;
          if (typeof KaKaoPaySourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = KaKaoPaySourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj12;
          merged = new KaKaoPaySourceRecord(obj12, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj12.type !== tmp7.KAKAOPAY) {
            merged = globalThis;
            const _Error8 = Error;
            const _HermesInternal8 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate KaKaoPaySourceRecord with type: " + obj12.type + ", must be " + tmp7.KAKAOPAY,
            );
            throw merged;
          } else {
            return merged;
          }
        } else if (tmp7.GOPAY_WALLET === type) {
          const obj13 = {};
          merged = obj13;
          merged = obj;
          merged = GoPayWalletSourceRecord;
          merged = Object.assign(obj);
          merged = new.target;
          if (typeof GoPayWalletSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = GoPayWalletSourceRecord;
          merged = new.target;
          merged = new.target;
          merged = obj13;
          merged = new GoPayWalletSourceRecord(obj13, obj, tmp5, tmp4, tmp3, tmp2, merged, merged, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj13.type !== tmp7.GOPAY_WALLET) {
            merged = globalThis;
            const _Error7 = Error;
            const _HermesInternal7 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate GoPayWalletSourceRecord with type: " + obj13.type + ", must be " + tmp7.GOPAY_WALLET,
            );
            throw merged;
          } else {
            return merged;
          }
        } else if (tmp7.BANCONTACT === type) {
          const obj14 = {};
          const merged1 = Object.assign(obj);
          if (typeof BancontactSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          merged = obj14;
          merged = new BancontactSourceRecord(
            obj14,
            obj,
            tmp5,
            tmp4,
            tmp3,
            tmp2,
            merged,
            BancontactSourceRecord,
            new.target,
            obj,
          );
          // ThrowIfThisInitialized (0x7c)
          if (obj14.type !== tmp7.BANCONTACT) {
            merged = globalThis;
            const _Error6 = Error;
            const _HermesInternal6 = HermesInternal;
            merged = new.target;
            merged = new.target;
            merged = new Error(
              "Cannot instantiate BancontactSourceRecord with type: " + obj14.type + ", must be " + tmp7.BANCONTACT,
            );
            throw merged;
          } else {
            return merged;
          }
          const tmp92 = BancontactSourceRecord;
        } else if (tmp7.IDEAL === type) {
          const obj15 = {};
          const merged2 = Object.assign(obj);
          obj15.bank = billing_address.bank;
          if (typeof IdealSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          const tmp85 = new IdealSourceRecord(
            obj15,
            obj,
            tmp5,
            tmp4,
            tmp3,
            tmp2,
            merged,
            IdealSourceRecord,
            new.target,
            obj,
          );
          // ThrowIfThisInitialized (0x7c)
          if (obj15.type !== tmp7.IDEAL) {
            const _Error5 = Error;
            const _HermesInternal5 = HermesInternal;
            error = new Error(
              "Cannot instantiate IdealSourceRecord with type: " + obj15.type + ", must be " + tmp7.IDEAL,
            );
            throw error;
          } else {
            tmp85.bank = obj15.bank;
            return tmp85;
          }
          const tmp76 = IdealSourceRecord;
        } else if (tmp7.CASH_APP === type) {
          const obj16 = {};
          const merged3 = Object.assign(obj);
          obj16.username = billing_address.username;
          if (typeof CashAppSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          const tmp68 = new CashAppSourceRecord(
            obj16,
            obj,
            tmp5,
            tmp4,
            tmp3,
            tmp2,
            merged,
            new.target,
            CashAppSourceRecord,
          );
          // ThrowIfThisInitialized (0x7c)
          if (obj16.type !== tmp7.CASH_APP) {
            const _Error4 = Error;
            const _HermesInternal4 = HermesInternal;
            const error1 = new Error(
              "Cannot instantiate Cashapp with type: " + obj16.type + ", must be " + tmp7.CASH_APP,
            );
            throw error1;
          } else {
            tmp68.username = obj16.username || "";
            return tmp68;
          }
          const tmp59 = CashAppSourceRecord;
        } else if (tmp7.TDS_WALLET === type) {
          const obj17 = {};
          const merged4 = Object.assign(obj);
          if (typeof TDSWalletSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          const tmp52 = new TDSWalletSourceRecord(
            obj17,
            obj,
            tmp5,
            tmp4,
            tmp3,
            tmp2,
            merged,
            TDSWalletSourceRecord,
            new.target,
            obj,
          );
          // ThrowIfThisInitialized (0x7c)
          if (obj17.type !== tmp7.TDS_WALLET) {
            const _Error3 = Error;
            const _HermesInternal3 = HermesInternal;
            const error2 = new Error(
              "Cannot instantiate TDSWalletSourceRecord with type: " + obj17.type + ", must be " + tmp7.TDS_WALLET,
            );
            throw error2;
          } else {
            return tmp52;
          }
          const tmp43 = TDSWalletSourceRecord;
        } else if (tmp7.PIX === type) {
          const obj18 = {};
          const merged5 = Object.assign(obj);
          obj18.email = billing_address.email;
          if (typeof PixSourceRecord !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          const tmp36 = new PixSourceRecord(
            obj18,
            obj,
            tmp5,
            tmp4,
            tmp3,
            tmp2,
            merged,
            PixSourceRecord,
            new.target,
            obj,
          );
          // ThrowIfThisInitialized (0x7c)
          if (obj18.type !== tmp7.PIX) {
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const error3 = new Error(
              "Cannot instantiate PixSourceRecord with type: " + obj18.type + ", must be " + tmp7.PIX,
            );
            throw error3;
          } else {
            tmp36.email = obj18.email;
            return tmp36;
          }
          const tmp27 = PixSourceRecord;
        } else if (tmp7.PIX_AUTOMATICO === type) {
          const obj19 = {};
          const merged6 = Object.assign(obj);
          obj19.email = billing_address.email;
          if (typeof prototype2 !== "function") {
            merged = HermesBuiltin.throwTypeError();
          }
          const tmp20 = new prototype2(obj19, obj, tmp5, tmp4, tmp3, tmp2, merged, prototype2, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj19.type !== tmp7.PIX_AUTOMATICO) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error4 = new Error(
              "Cannot instantiate PixAutomaticoSourceRecord with type: " +
                obj19.type +
                ", must be " +
                tmp7.PIX_AUTOMATICO,
            );
            throw error4;
          } else {
            tmp20.email = obj19.email;
            return tmp20;
          }
          const tmp11 = prototype2;
        } else {
          obj4 = isDiscordFrontendDevelopment;
          obj4.assertNever(billing_address);
        }
      }
    }
    const obj20 = {};
    merged = obj20;
    merged = obj;
    merged = SofortSourceRecord;
    merged = Object.assign(obj);
    obj20.email = billing_address.email;
    merged = new.target;
    if (typeof SofortSourceRecord !== "function") {
      merged = HermesBuiltin.throwTypeError();
    }
    merged = SofortSourceRecord;
    merged = new.target;
    merged = new.target;
    merged = obj20;
    merged = new SofortSourceRecord(obj20, obj, tmp5, tmp4, tmp3, tmp2, merged, new.target, merged);
    // ThrowIfThisInitialized (0x7c)
    if (obj20.type !== tmp7.SOFORT) {
      if (obj20.type !== tmp7.SEPA_DEBIT) {
        merged = globalThis;
        const _Error16 = Error;
        const _HermesInternal16 = HermesInternal;
        merged = new.target;
        merged = new.target;
        merged = new Error(
          "Cannot instantiate SofortSourceRecord with type: " +
            obj20.type +
            ", must be " +
            tmp7.SOFORT +
            " or " +
            tmp7.SEPA_DEBIT,
        );
        throw merged;
      }
    }
    merged = obj20.email || "";
    merged.email = merged;
    return merged;
  }
};
PaymentSourceRecord["createFromSerialized"] = function createFromSerialized(type) {
  type = type.type;
  const tmp6 = closure_4;
  if (closure_4.CARD === type) {
    let throwTypeErrorResult = CreditCardSourceRecord;
    throwTypeErrorResult = new.target;
    if (typeof CreditCardSourceRecord !== "function") {
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    throwTypeErrorResult = CreditCardSourceRecord;
    throwTypeErrorResult = new.target;
    throwTypeErrorResult = new.target;
    throwTypeErrorResult = type;
    throwTypeErrorResult = new CreditCardSourceRecord(type, tmp5, tmp4);
    // ThrowIfThisInitialized (0x7c)
    if (type.type !== tmp6.CARD) {
      throwTypeErrorResult = globalThis;
      const _Error19 = Error;
      const _HermesInternal19 = HermesInternal;
      throwTypeErrorResult = new.target;
      throwTypeErrorResult = new.target;
      throwTypeErrorResult = new Error(
        "Cannot instantiate CreditCardSourceRecord with type: " + type.type + ", must be " + tmp6.CARD,
      );
      throw throwTypeErrorResult;
    } else {
      let str38 = type.brand;
      throwTypeErrorResult = null;
      if (str38 == null) {
        str38 = "";
      }
      throwTypeErrorResult.brand = str38;
      let str39 = type.last4;
      if (str39 == null) {
        str39 = "";
      }
      throwTypeErrorResult.last4 = str39;
      let num = type.expiresMonth;
      if (num == null) {
        num = 0;
      }
      throwTypeErrorResult.expiresMonth = num;
      let num2 = type.expiresYear;
      if (num2 == null) {
        num2 = 0;
      }
      throwTypeErrorResult.expiresYear = num2;
      return throwTypeErrorResult;
    }
  } else if (tmp6.PAYPAL === type) {
    throwTypeErrorResult = PaypalSourceRecord;
    throwTypeErrorResult = new.target;
    if (typeof PaypalSourceRecord !== "function") {
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    throwTypeErrorResult = PaypalSourceRecord;
    throwTypeErrorResult = new.target;
    throwTypeErrorResult = new.target;
    throwTypeErrorResult = type;
    throwTypeErrorResult = new PaypalSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    if (type.type !== tmp6.PAYPAL) {
      throwTypeErrorResult = globalThis;
      const _Error18 = Error;
      const _HermesInternal18 = HermesInternal;
      throwTypeErrorResult = new.target;
      throwTypeErrorResult = new.target;
      throwTypeErrorResult = new Error(
        "Cannot instantiate PaypalSourceRecord with type: " + type.type + ", must be " + tmp6.PAYPAL,
      );
      throw throwTypeErrorResult;
    } else {
      throwTypeErrorResult = type.email || "";
      throwTypeErrorResult.email = throwTypeErrorResult;
      return throwTypeErrorResult;
    }
  } else {
    if (tmp6.SOFORT !== type) {
      if (tmp6.SEPA_DEBIT !== type) {
        if (tmp6.GIROPAY === type) {
          throwTypeErrorResult = GiropaySourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof GiropaySourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = GiropaySourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new GiropaySourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.GIROPAY) {
            throwTypeErrorResult = globalThis;
            const _Error16 = Error;
            const _HermesInternal16 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate GiropaySourceRecord with type: " + type.type + ", must be " + tmp6.GIROPAY,
            );
            throw throwTypeErrorResult;
          } else {
            return throwTypeErrorResult;
          }
        } else if (tmp6.PRZELEWY24 === type) {
          throwTypeErrorResult = Przelewy24SourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof Przelewy24SourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = Przelewy24SourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new Przelewy24SourceRecord(type, tmp5, tmp4, tmp3, tmp2);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.PRZELEWY24) {
            throwTypeErrorResult = globalThis;
            const _Error15 = Error;
            const _HermesInternal15 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate Przelewy24SourceRecord with type: " + type.type + ", must be " + tmp6.PRZELEWY24,
            );
            throw throwTypeErrorResult;
          } else {
            throwTypeErrorResult = type.email || "";
            throwTypeErrorResult.email = throwTypeErrorResult;
            throwTypeErrorResult.bank = type.bank;
            return throwTypeErrorResult;
          }
        } else if (tmp6.PAYSAFE_CARD === type) {
          throwTypeErrorResult = PaysafeSourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof PaysafeSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = PaysafeSourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new PaysafeSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.PAYSAFE_CARD) {
            throwTypeErrorResult = globalThis;
            const _Error14 = Error;
            const _HermesInternal14 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate PaysafeSourceRecord with type: " + type.type + ", must be " + tmp6.PAYSAFE_CARD,
            );
            throw throwTypeErrorResult;
          } else {
            return throwTypeErrorResult;
          }
        } else if (tmp6.GCASH === type) {
          throwTypeErrorResult = GcashSourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof GcashSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = GcashSourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new GcashSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.GCASH) {
            throwTypeErrorResult = globalThis;
            const _Error13 = Error;
            const _HermesInternal13 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate GcashSourceRecord with type: " + type.type + ", must be " + tmp6.GCASH,
            );
            throw throwTypeErrorResult;
          } else {
            return throwTypeErrorResult;
          }
        } else if (tmp6.GRABPAY_MY === type) {
          throwTypeErrorResult = GrabPayMySourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof GrabPayMySourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = GrabPayMySourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new GrabPayMySourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.GRABPAY_MY) {
            throwTypeErrorResult = globalThis;
            const _Error12 = Error;
            const _HermesInternal12 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate GrabPayMySourceRecord with type: " + type.type + ", must be " + tmp6.GRABPAY_MY,
            );
            throw throwTypeErrorResult;
          } else {
            return throwTypeErrorResult;
          }
        } else if (tmp6.MOMO_WALLET === type) {
          throwTypeErrorResult = MomoWalletSourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof MomoWalletSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = MomoWalletSourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new MomoWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.MOMO_WALLET) {
            throwTypeErrorResult = globalThis;
            const _Error11 = Error;
            const _HermesInternal11 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate MomoWalletSourceRecord with type: " + type.type + ", must be " + tmp6.MOMO_WALLET,
            );
            throw throwTypeErrorResult;
          } else {
            return throwTypeErrorResult;
          }
        } else if (tmp6.VENMO === type) {
          throwTypeErrorResult = VenmoSourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof VenmoSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = VenmoSourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new VenmoSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.VENMO) {
            throwTypeErrorResult = globalThis;
            const _Error10 = Error;
            const _HermesInternal10 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate VenmoSourceRecord with type: " + type.type + ", must be " + tmp6.VENMO,
            );
            throw throwTypeErrorResult;
          } else {
            throwTypeErrorResult = type.username || "";
            throwTypeErrorResult.username = throwTypeErrorResult;
            return throwTypeErrorResult;
          }
        } else if (tmp6.KAKAOPAY === type) {
          throwTypeErrorResult = KaKaoPaySourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof KaKaoPaySourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = KaKaoPaySourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new KaKaoPaySourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.KAKAOPAY) {
            throwTypeErrorResult = globalThis;
            const _Error9 = Error;
            const _HermesInternal9 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate KaKaoPaySourceRecord with type: " + type.type + ", must be " + tmp6.KAKAOPAY,
            );
            throw throwTypeErrorResult;
          } else {
            return throwTypeErrorResult;
          }
        } else if (tmp6.GOPAY_WALLET === type) {
          throwTypeErrorResult = GoPayWalletSourceRecord;
          throwTypeErrorResult = new.target;
          if (typeof GoPayWalletSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          throwTypeErrorResult = GoPayWalletSourceRecord;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = type;
          throwTypeErrorResult = new GoPayWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.GOPAY_WALLET) {
            throwTypeErrorResult = globalThis;
            const _Error8 = Error;
            const _HermesInternal8 = HermesInternal;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Error(
              "Cannot instantiate GoPayWalletSourceRecord with type: " + type.type + ", must be " + tmp6.GOPAY_WALLET,
            );
            throw throwTypeErrorResult;
          } else {
            return throwTypeErrorResult;
          }
        } else if (tmp6.BANCONTACT === type) {
          if (typeof BancontactSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const tmp95 = new BancontactSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.BANCONTACT) {
            const _Error7 = Error;
            const _HermesInternal7 = HermesInternal;
            throwTypeErrorResult = new Error(
              "Cannot instantiate BancontactSourceRecord with type: " + type.type + ", must be " + tmp6.BANCONTACT,
            );
            throw throwTypeErrorResult;
          } else {
            return tmp95;
          }
        } else if (tmp6.EPS === type) {
          if (typeof EPSSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const tmp82 = new EPSSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.EPS) {
            const _Error6 = Error;
            const _HermesInternal6 = HermesInternal;
            error = new Error("Cannot instantiate EPSSourceRecord with type: " + type.type + ", must be " + tmp6.EPS);
            throw error;
          } else {
            tmp82.bank = type.bank;
            return tmp82;
          }
        } else if (tmp6.IDEAL === type) {
          if (typeof IdealSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const tmp69 = new IdealSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.IDEAL) {
            const _Error5 = Error;
            const _HermesInternal5 = HermesInternal;
            const error1 = new Error(
              "Cannot instantiate IdealSourceRecord with type: " + type.type + ", must be " + tmp6.IDEAL,
            );
            throw error1;
          } else {
            tmp69.bank = type.bank;
            return tmp69;
          }
        } else if (tmp6.CASH_APP === type) {
          if (typeof CashAppSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const tmp55 = new CashAppSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.CASH_APP) {
            const _Error4 = Error;
            const _HermesInternal4 = HermesInternal;
            const error2 = new Error(
              "Cannot instantiate Cashapp with type: " + type.type + ", must be " + tmp6.CASH_APP,
            );
            throw error2;
          } else {
            tmp55.username = type.username || "";
            return tmp55;
          }
        } else if (tmp6.TDS_WALLET === type) {
          if (typeof TDSWalletSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const tmp42 = new TDSWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.TDS_WALLET) {
            const _Error3 = Error;
            const _HermesInternal3 = HermesInternal;
            const error3 = new Error(
              "Cannot instantiate TDSWalletSourceRecord with type: " + type.type + ", must be " + tmp6.TDS_WALLET,
            );
            throw error3;
          } else {
            return tmp42;
          }
        } else if (tmp6.PIX === type) {
          if (typeof PixSourceRecord !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const tmp29 = new PixSourceRecord(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.PIX) {
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const error4 = new Error(
              "Cannot instantiate PixSourceRecord with type: " + type.type + ", must be " + tmp6.PIX,
            );
            throw error4;
          } else {
            tmp29.email = type.email;
            return tmp29;
          }
        } else if (tmp6.PIX_AUTOMATICO === type) {
          if (typeof prototype2 !== "function") {
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          const tmp16 = new prototype2(type, tmp5, tmp4, tmp3, tmp2, throwTypeErrorResult);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== tmp6.PIX_AUTOMATICO) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error5 = new Error(
              "Cannot instantiate PixAutomaticoSourceRecord with type: " +
                type.type +
                ", must be " +
                tmp6.PIX_AUTOMATICO,
            );
            throw error5;
          } else {
            tmp16.email = type.email;
            return tmp16;
          }
        } else {
          isDiscordFrontendDevelopment.assertNever(type);
        }
      }
    }
    throwTypeErrorResult = SofortSourceRecord;
    throwTypeErrorResult = new.target;
    if (typeof SofortSourceRecord !== "function") {
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    throwTypeErrorResult = SofortSourceRecord;
    throwTypeErrorResult = new.target;
    throwTypeErrorResult = new.target;
    throwTypeErrorResult = type;
    throwTypeErrorResult = new SofortSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    if (type.type !== tmp6.SOFORT) {
      if (type.type !== tmp6.SEPA_DEBIT) {
        throwTypeErrorResult = globalThis;
        const _Error17 = Error;
        const _HermesInternal17 = HermesInternal;
        throwTypeErrorResult = new.target;
        throwTypeErrorResult = new.target;
        throwTypeErrorResult = new Error(
          "Cannot instantiate SofortSourceRecord with type: " +
            type.type +
            ", must be " +
            tmp6.SOFORT +
            " or " +
            tmp6.SEPA_DEBIT,
        );
        throw throwTypeErrorResult;
      }
    }
    throwTypeErrorResult = type.email || "";
    throwTypeErrorResult.email = throwTypeErrorResult;
    return throwTypeErrorResult;
  }
};
prototype["hasFlag"] = function hasFlag(arg0) {
  return hasFlag.hasFlag(this.flags, arg0);
};
Object.defineProperty(prototype, "paymentMethodCountry", {
  get: function paymentMethodCountry() {
    const self = this;
    if (null != this.country) {
      if ("" !== self.country) {
        let country = self.country;
      }
      return country;
    }
    country = self.billingAddress.country;
  },
  set: undefined,
});
prototype["canRedeemTrial"] = function canRedeemTrial() {
  return !set.has(this.type);
};
class CreditCardSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new CreditCardSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.CARD) {
      tmp7 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str3 = ", must be ";
      str4 = "Cannot instantiate CreditCardSourceRecord with type: ";
      tmp8 = new.target;
      tmp9 = new.target;
      error = new Error(
        "Cannot instantiate CreditCardSourceRecord with type: " + global.type + ", must be " + tmp4.CARD,
      );
      tmp11 = error;
      throw error;
    } else {
      str = global.brand;
      tmp5 = null;
      if (str == null) {
        str = "";
      }
      tmp6 = tmp3;
      tmp3.brand = str;
      str2 = global.last4;
      if (str2 == null) {
        str2 = "";
      }
      tmp3.last4 = str2;
      num = global.expiresMonth;
      if (num == null) {
        num = 0;
      }
      tmp3.expiresMonth = num;
      num2 = global.expiresYear;
      if (num2 == null) {
        num2 = 0;
      }
      tmp3.expiresYear = num2;
      return tmp3;
    }
  }
}
Object.defineProperty(CreditCardSourceRecord.prototype, "isStripeLinkBankAccount", {
  get: function isStripeLinkBankAccount() {
    let tmp = "link" === this.brand;
    if (tmp) {
      tmp = "0000" === this.last4;
    }
    return tmp;
  },
  set: undefined,
});
class PaypalSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp = new PaypalSourceRecord(global);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.PAYPAL) {
      tmp5 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate PaypalSourceRecord with type: ";
      tmp6 = new.target;
      tmp7 = new.target;
      error = new Error("Cannot instantiate PaypalSourceRecord with type: " + global.type + ", must be " + tmp2.PAYPAL);
      tmp9 = error;
      throw error;
    } else {
      tmp3 = global.email || "";
      tmp4 = tmp;
      tmp.email = tmp3;
      return tmp;
    }
  }
}
class SofortSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp = new SofortSourceRecord(global);
    // ThrowIfThisInitialized (0x7c)
    tmp2 = PaymentSourceTypes;
    if (global.type !== PaymentSourceTypes.SOFORT) {
      if (global.type !== tmp2.SEPA_DEBIT) {
        tmp4 = globalThis;
        _Error = Error;
        _HermesInternal = HermesInternal;
        str = " or ";
        str2 = ", must be ";
        str3 = "Cannot instantiate SofortSourceRecord with type: ";
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error(
          "Cannot instantiate SofortSourceRecord with type: " +
            global.type +
            ", must be " +
            tmp2.SOFORT +
            " or " +
            tmp2.SEPA_DEBIT,
        );
        tmp8 = error;
        throw error;
      }
    }
    tmp3 = global.email || "";
    tmp.email = tmp3;
    return tmp;
  }
}
class GiropaySourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new GiropaySourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.GIROPAY) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate GiropaySourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate GiropaySourceRecord with type: " + global.type + ", must be " + tmp4.GIROPAY,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class Przelewy24SourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp = new Przelewy24SourceRecord(global);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.PRZELEWY24) {
      tmp5 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate Przelewy24SourceRecord with type: ";
      tmp6 = new.target;
      tmp7 = new.target;
      error = new Error(
        "Cannot instantiate Przelewy24SourceRecord with type: " + global.type + ", must be " + tmp2.PRZELEWY24,
      );
      tmp9 = error;
      throw error;
    } else {
      tmp3 = global.email || "";
      tmp4 = tmp;
      tmp.email = tmp3;
      tmp.bank = global.bank;
      return tmp;
    }
  }
}
class EPSSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new EPSSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.EPS) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate EPSSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error("Cannot instantiate EPSSourceRecord with type: " + global.type + ", must be " + tmp4.EPS);
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      tmp3.bank = global.bank;
      return tmp3;
    }
  }
}
class IdealSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new IdealSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.IDEAL) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate IdealSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error("Cannot instantiate IdealSourceRecord with type: " + global.type + ", must be " + tmp4.IDEAL);
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      tmp3.bank = global.bank;
      return tmp3;
    }
  }
}
class PaysafeSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new PaysafeSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.PAYSAFE_CARD) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate PaysafeSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate PaysafeSourceRecord with type: " + global.type + ", must be " + tmp4.PAYSAFE_CARD,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class GcashSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new GcashSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.GCASH) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate GcashSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error("Cannot instantiate GcashSourceRecord with type: " + global.type + ", must be " + tmp4.GCASH);
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class GrabPayMySourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new GrabPayMySourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.GRABPAY_MY) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate GrabPayMySourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate GrabPayMySourceRecord with type: " + global.type + ", must be " + tmp4.GRABPAY_MY,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class MomoWalletSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new MomoWalletSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.MOMO_WALLET) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate MomoWalletSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate MomoWalletSourceRecord with type: " + global.type + ", must be " + tmp4.MOMO_WALLET,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class VenmoSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp = new VenmoSourceRecord(global);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.VENMO) {
      tmp5 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate VenmoSourceRecord with type: ";
      tmp6 = new.target;
      tmp7 = new.target;
      error = new Error("Cannot instantiate VenmoSourceRecord with type: " + global.type + ", must be " + tmp2.VENMO);
      tmp9 = error;
      throw error;
    } else {
      tmp3 = global.username || "";
      tmp4 = tmp;
      tmp.username = tmp3;
      return tmp;
    }
  }
}
class KaKaoPaySourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new KaKaoPaySourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.KAKAOPAY) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate KaKaoPaySourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate KaKaoPaySourceRecord with type: " + global.type + ", must be " + tmp4.KAKAOPAY,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class GoPayWalletSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new GoPayWalletSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.GOPAY_WALLET) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate GoPayWalletSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate GoPayWalletSourceRecord with type: " + global.type + ", must be " + tmp4.GOPAY_WALLET,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class BancontactSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new BancontactSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.BANCONTACT) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate BancontactSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate BancontactSourceRecord with type: " + global.type + ", must be " + tmp4.BANCONTACT,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class CashAppSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp = new CashAppSourceRecord(global);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.CASH_APP) {
      tmp5 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate Cashapp with type: ";
      tmp6 = new.target;
      tmp7 = new.target;
      error = new Error("Cannot instantiate Cashapp with type: " + global.type + ", must be " + tmp2.CASH_APP);
      tmp9 = error;
      throw error;
    } else {
      tmp3 = global.username || "";
      tmp4 = tmp;
      tmp.username = tmp3;
      return tmp;
    }
  }
}
class TDSWalletSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new TDSWalletSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.TDS_WALLET) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate TDSWalletSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error(
        "Cannot instantiate TDSWalletSourceRecord with type: " + global.type + ", must be " + tmp4.TDS_WALLET,
      );
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
class PixSourceRecord extends PaymentSourceRecord {
  constructor(arg0) {
    tmp3 = new PixSourceRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    if (global.type !== PaymentSourceTypes.PIX) {
      tmp6 = globalThis;
      _Error = Error;
      _HermesInternal = HermesInternal;
      str = ", must be ";
      str2 = "Cannot instantiate PixSourceRecord with type: ";
      tmp7 = new.target;
      tmp8 = new.target;
      error = new Error("Cannot instantiate PixSourceRecord with type: " + global.type + ", must be " + tmp4.PIX);
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      tmp3.email = global.email;
      return tmp3;
    }
  }
}
const prototype2 = function PixAutomaticoSourceRecord(type) {
  const tmp3 = new prototype2(type, tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  if (type.type !== closure_4.PIX_AUTOMATICO) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error(
      "Cannot instantiate PixAutomaticoSourceRecord with type: " + type.type + ", must be " + tmp4.PIX_AUTOMATICO,
    );
    throw error;
  } else {
    tmp3.email = type.email;
    return tmp3;
  }
}.prototype;
class prototype2 extends PaymentSourceRecord {}
const result = require("set").fileFinishedImporting("records/PaymentSourceRecord.tsx");
const prototype3 = function AppleSourceRecord(type) {
  type.id = "";
  type.paymentGateway = constants.APPLE_PARTNER;
  type.type = closure_4.APPLE;
  type.billingAddress = {};
  type.country = "";
  type.invalid = false;
  type.isDefault = false;
  type.flags = 0;
  const tmp5 = new prototype3(type, tmp3, tmp2, tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  if (type.type !== closure_4.APPLE) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Cannot instantiate AppleSourceRecord with type: " + type.type + ", must be " + tmp4.APPLE);
    throw error;
  } else {
    return tmp5;
  }
  tmp4 = closure_4;
}.prototype;
class prototype3 extends PaymentSourceRecord {}

export default PaymentSourceRecord;
export { CreditCardSourceRecord };
export { PaypalSourceRecord };
export { SofortSourceRecord };
export { GiropaySourceRecord };
export { Przelewy24SourceRecord };
export { EPSSourceRecord };
export { IdealSourceRecord };
export { PaysafeSourceRecord };
export { GcashSourceRecord };
export { GrabPayMySourceRecord };
export { MomoWalletSourceRecord };
export { VenmoSourceRecord };
export { KaKaoPaySourceRecord };
export { GoPayWalletSourceRecord };
export { BancontactSourceRecord };
export { CashAppSourceRecord };
export const AppleSourceRecord = prototype3;
export { TDSWalletSourceRecord };
export { PixSourceRecord };
export const PixAutomaticoSourceRecord = prototype2;
