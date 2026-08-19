// === Module 4043: createFromServer ===

// Module 4043 (createFromServer)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import hasFlag from "hasFlag" /* 1403 */;
import toJSDefault from "toJS" /* 1931 */;
import ME from "ME" /* 676 */;

require = fn;
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
  const obj = { name: billing_address.name, line1: billing_address.line_1, line2: billing_address.line_2, city: billing_address.city, postalCode: billing_address.postal_code, state: billing_address.state, country: billing_address.country };
  let tmp6;
  if (null != billing_address.pix) {
    obj1 = { taxId: null };
    obj1[0] = billing_address.pix.tax_id;
    tmp6 = obj1;
  }
  obj[8] = tmp6;
  const type = billing_address.type;
  if (closure_4.CARD === type) {
    const obj2 = {};
    const merged = Object.assign(obj);
    ({ brand: obj23.brand, last_4: obj23.last4, expires_month: obj23.expiresMonth, expires_year: obj23.expiresYear } = billing_address);
    if (typeof CreditCardSourceRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp297 = new CreditCardSourceRecord(obj2, obj, tmp5, tmp4, tmp3);
    // ThrowIfThisInitialized (0x7c)
    if (obj2.type !== closure_4.CARD) {
      const _Error18 = Error;
      const _HermesInternal18 = HermesInternal;
      error = new Error("Cannot instantiate CreditCardSourceRecord with type: " + obj2.type + ", must be " + closure_4.CARD);
      throw error;
    } else {
      let str36 = obj2.brand;
      if (str36 == null) {
        str36 = "";
      }
      tmp297.brand = str36;
      let str37 = obj2.last4;
      if (str37 == null) {
        str37 = "";
      }
      tmp297.last4 = str37;
      let num = obj2.expiresMonth;
      if (num == null) {
        num = 0;
      }
      tmp297.expiresMonth = num;
      let num2 = obj2.expiresYear;
      if (num2 == null) {
        num2 = 0;
      }
      tmp297.expiresYear = num2;
      return tmp297;
    }
  } else if (closure_4.PAYPAL === type) {
    const obj3 = {};
    const merged1 = Object.assign(obj);
    obj3.email = billing_address.email;
    if (typeof PaypalSourceRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp280 = new PaypalSourceRecord(obj3, obj, tmp5, tmp4, tmp3, tmp2, tmp, new.target, PaypalSourceRecord);
    // ThrowIfThisInitialized (0x7c)
    if (obj3.type !== closure_4.PAYPAL) {
      const _Error17 = Error;
      const _HermesInternal17 = HermesInternal;
      const error1 = new Error("Cannot instantiate PaypalSourceRecord with type: " + obj3.type + ", must be " + closure_4.PAYPAL);
      throw error1;
    } else {
      tmp280.email = obj3.email || "";
      return tmp280;
    }
  } else if (closure_4.VENMO === type) {
    let obj4 = {};
    const merged2 = Object.assign(obj);
    obj4.username = billing_address.username;
    if (typeof VenmoSourceRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp263 = new VenmoSourceRecord(obj4, obj, tmp5, tmp4, tmp3, tmp2, tmp, new.target, VenmoSourceRecord);
    // ThrowIfThisInitialized (0x7c)
    if (obj4.type !== closure_4.VENMO) {
      const _Error16 = Error;
      const _HermesInternal16 = HermesInternal;
      const error2 = new Error("Cannot instantiate VenmoSourceRecord with type: " + obj4.type + ", must be " + closure_4.VENMO);
      throw error2;
    } else {
      tmp263.username = obj4.username || "";
      return tmp263;
    }
  } else {
    if (closure_4.SEPA_DEBIT !== type) {
      if (closure_4.SOFORT !== type) {
        if (closure_4.GIROPAY === type) {
          const obj5 = {};
          const merged3 = Object.assign(obj);
          if (typeof GiropaySourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp230 = new GiropaySourceRecord(obj5, obj, tmp5, tmp4, tmp3, tmp2, tmp, GiropaySourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj5.type !== closure_4.GIROPAY) {
            const _Error14 = Error;
            const _HermesInternal14 = HermesInternal;
            const error3 = new Error("Cannot instantiate GiropaySourceRecord with type: " + obj5.type + ", must be " + closure_4.GIROPAY);
            throw error3;
          } else {
            return tmp230;
          }
        } else if (closure_4.PRZELEWY24 === type) {
          const obj6 = {};
          const merged4 = Object.assign(obj);
          ({ email: obj18.email, bank: obj18.bank } = billing_address);
          if (typeof Przelewy24SourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp213 = new Przelewy24SourceRecord(obj6, obj, tmp5, tmp4, tmp3, tmp2, tmp, new.target, Przelewy24SourceRecord);
          // ThrowIfThisInitialized (0x7c)
          if (obj6.type !== closure_4.PRZELEWY24) {
            const _Error13 = Error;
            const _HermesInternal13 = HermesInternal;
            const error4 = new Error("Cannot instantiate Przelewy24SourceRecord with type: " + obj6.type + ", must be " + closure_4.PRZELEWY24);
            throw error4;
          } else {
            tmp213.email = obj6.email || "";
            tmp213.bank = obj6.bank;
            return tmp213;
          }
        } else if (closure_4.EPS === type) {
          const obj7 = {};
          const merged5 = Object.assign(obj);
          obj7.bank = billing_address.bank;
          if (typeof EPSSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp197 = new EPSSourceRecord(obj7, obj, tmp5, tmp4, tmp3, tmp2, tmp, EPSSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj7.type !== closure_4.EPS) {
            const _Error12 = Error;
            const _HermesInternal12 = HermesInternal;
            const error5 = new Error("Cannot instantiate EPSSourceRecord with type: " + obj7.type + ", must be " + closure_4.EPS);
            throw error5;
          } else {
            tmp197.bank = obj7.bank;
            return tmp197;
          }
        } else if (closure_4.PAYSAFE_CARD === type) {
          const obj8 = {};
          const merged6 = Object.assign(obj);
          if (typeof PaysafeSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp181 = new PaysafeSourceRecord(obj8, obj, tmp5, tmp4, tmp3, tmp2, tmp, PaysafeSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj8.type !== closure_4.PAYSAFE_CARD) {
            const _Error11 = Error;
            const _HermesInternal11 = HermesInternal;
            const error6 = new Error("Cannot instantiate PaysafeSourceRecord with type: " + obj8.type + ", must be " + closure_4.PAYSAFE_CARD);
            throw error6;
          } else {
            return tmp181;
          }
        } else if (closure_4.GCASH === type) {
          const obj9 = {};
          const merged7 = Object.assign(obj);
          if (typeof GcashSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp165 = new GcashSourceRecord(obj9, obj, tmp5, tmp4, tmp3, tmp2, tmp, GcashSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj9.type !== closure_4.GCASH) {
            const _Error10 = Error;
            const _HermesInternal10 = HermesInternal;
            const error7 = new Error("Cannot instantiate GcashSourceRecord with type: " + obj9.type + ", must be " + closure_4.GCASH);
            throw error7;
          } else {
            return tmp165;
          }
        } else if (closure_4.GRABPAY_MY === type) {
          const obj10 = {};
          const merged8 = Object.assign(obj);
          if (typeof GrabPayMySourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp149 = new GrabPayMySourceRecord(obj10, obj, tmp5, tmp4, tmp3, tmp2, tmp, GrabPayMySourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj10.type !== closure_4.GRABPAY_MY) {
            const _Error9 = Error;
            const _HermesInternal9 = HermesInternal;
            const error8 = new Error("Cannot instantiate GrabPayMySourceRecord with type: " + obj10.type + ", must be " + closure_4.GRABPAY_MY);
            throw error8;
          } else {
            return tmp149;
          }
        } else if (closure_4.MOMO_WALLET === type) {
          const obj11 = {};
          const merged9 = Object.assign(obj);
          if (typeof MomoWalletSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp133 = new MomoWalletSourceRecord(obj11, obj, tmp5, tmp4, tmp3, tmp2, tmp, MomoWalletSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj11.type !== closure_4.MOMO_WALLET) {
            const _Error8 = Error;
            const _HermesInternal8 = HermesInternal;
            const error9 = new Error("Cannot instantiate MomoWalletSourceRecord with type: " + obj11.type + ", must be " + closure_4.MOMO_WALLET);
            throw error9;
          } else {
            return tmp133;
          }
        } else if (closure_4.KAKAOPAY === type) {
          const obj12 = {};
          const merged10 = Object.assign(obj);
          if (typeof KaKaoPaySourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp117 = new KaKaoPaySourceRecord(obj12, obj, tmp5, tmp4, tmp3, tmp2, tmp, KaKaoPaySourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj12.type !== closure_4.KAKAOPAY) {
            const _Error7 = Error;
            const _HermesInternal7 = HermesInternal;
            const error10 = new Error("Cannot instantiate KaKaoPaySourceRecord with type: " + obj12.type + ", must be " + closure_4.KAKAOPAY);
            throw error10;
          } else {
            return tmp117;
          }
        } else if (closure_4.GOPAY_WALLET === type) {
          const obj13 = {};
          const merged11 = Object.assign(obj);
          if (typeof GoPayWalletSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp101 = new GoPayWalletSourceRecord(obj13, obj, tmp5, tmp4, tmp3, tmp2, tmp, GoPayWalletSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj13.type !== closure_4.GOPAY_WALLET) {
            const _Error6 = Error;
            const _HermesInternal6 = HermesInternal;
            const error11 = new Error("Cannot instantiate GoPayWalletSourceRecord with type: " + obj13.type + ", must be " + closure_4.GOPAY_WALLET);
            throw error11;
          } else {
            return tmp101;
          }
        } else if (closure_4.BANCONTACT === type) {
          const obj14 = {};
          const merged12 = Object.assign(obj);
          if (typeof BancontactSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp85 = new BancontactSourceRecord(obj14, obj, tmp5, tmp4, tmp3, tmp2, tmp, BancontactSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj14.type !== closure_4.BANCONTACT) {
            const _Error5 = Error;
            const _HermesInternal5 = HermesInternal;
            const error12 = new Error("Cannot instantiate BancontactSourceRecord with type: " + obj14.type + ", must be " + closure_4.BANCONTACT);
            throw error12;
          } else {
            return tmp85;
          }
        } else if (closure_4.IDEAL === type) {
          const obj15 = {};
          const merged13 = Object.assign(obj);
          obj15.bank = billing_address.bank;
          if (typeof IdealSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp69 = new IdealSourceRecord(obj15, obj, tmp5, tmp4, tmp3, tmp2, tmp, IdealSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj15.type !== closure_4.IDEAL) {
            const _Error4 = Error;
            const _HermesInternal4 = HermesInternal;
            const error13 = new Error("Cannot instantiate IdealSourceRecord with type: " + obj15.type + ", must be " + closure_4.IDEAL);
            throw error13;
          } else {
            tmp69.bank = obj15.bank;
            return tmp69;
          }
        } else if (closure_4.CASH_APP === type) {
          const obj16 = {};
          const merged14 = Object.assign(obj);
          obj16.username = billing_address.username;
          if (typeof CashAppSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp52 = new CashAppSourceRecord(obj16, obj, tmp5, tmp4, tmp3, tmp2, tmp, new.target, CashAppSourceRecord);
          // ThrowIfThisInitialized (0x7c)
          if (obj16.type !== closure_4.CASH_APP) {
            const _Error3 = Error;
            const _HermesInternal3 = HermesInternal;
            const error14 = new Error("Cannot instantiate Cashapp with type: " + obj16.type + ", must be " + closure_4.CASH_APP);
            throw error14;
          } else {
            tmp52.username = obj16.username || "";
            return tmp52;
          }
        } else if (closure_4.TDS_WALLET === type) {
          const obj17 = {};
          const merged15 = Object.assign(obj);
          if (typeof TDSWalletSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp36 = new TDSWalletSourceRecord(obj17, obj, tmp5, tmp4, tmp3, tmp2, tmp, TDSWalletSourceRecord, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj17.type !== closure_4.TDS_WALLET) {
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const error15 = new Error("Cannot instantiate TDSWalletSourceRecord with type: " + obj17.type + ", must be " + closure_4.TDS_WALLET);
            throw error15;
          } else {
            return tmp36;
          }
        } else if (closure_4.PIX === type) {
          const obj18 = {};
          const merged16 = Object.assign(obj);
          obj18.email = billing_address.email;
          if (typeof prototype2 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp20 = new prototype2(obj18, obj, tmp5, tmp4, tmp3, tmp2, tmp, prototype2, new.target, obj);
          // ThrowIfThisInitialized (0x7c)
          if (obj18.type !== closure_4.PIX) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error16 = new Error("Cannot instantiate PixSourceRecord with type: " + obj18.type + ", must be " + closure_4.PIX);
            throw error16;
          } else {
            tmp20.email = obj18.email;
            return tmp20;
          }
        } else {
          obj4 = isDiscordFrontendDevelopment;
          obj4.assertNever(billing_address);
        }
      }
    }
    const obj19 = {};
    const merged17 = Object.assign(obj);
    obj19.email = billing_address.email;
    if (typeof SofortSourceRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp246 = new SofortSourceRecord(obj19, obj, tmp5, tmp4, tmp3, tmp2, tmp, new.target, SofortSourceRecord);
    // ThrowIfThisInitialized (0x7c)
    if (obj19.type !== closure_4.SOFORT) {
      if (obj19.type !== closure_4.SEPA_DEBIT) {
        const _Error15 = Error;
        const _HermesInternal15 = HermesInternal;
        const error17 = new Error("Cannot instantiate SofortSourceRecord with type: " + obj19.type + ", must be " + closure_4.SOFORT + " or " + closure_4.SEPA_DEBIT);
        throw error17;
      }
    }
    tmp246.email = obj19.email || "";
    return tmp246;
  }
};
PaymentSourceRecord["createFromSerialized"] = function createFromSerialized(type) {
  type = type.type;
  if (closure_4.CARD === type) {
    if (typeof CreditCardSourceRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp242 = new CreditCardSourceRecord(type, tmp5, tmp4);
    // ThrowIfThisInitialized (0x7c)
    if (type.type !== closure_4.CARD) {
      const _Error18 = Error;
      const _HermesInternal18 = HermesInternal;
      error = new Error("Cannot instantiate CreditCardSourceRecord with type: " + type.type + ", must be " + closure_4.CARD);
      throw error;
    } else {
      let str36 = type.brand;
      if (str36 == null) {
        str36 = "";
      }
      tmp242.brand = str36;
      let str37 = type.last4;
      if (str37 == null) {
        str37 = "";
      }
      tmp242.last4 = str37;
      let num = type.expiresMonth;
      if (num == null) {
        num = 0;
      }
      tmp242.expiresMonth = num;
      let num2 = type.expiresYear;
      if (num2 == null) {
        num2 = 0;
      }
      tmp242.expiresYear = num2;
      return tmp242;
    }
  } else if (closure_4.PAYPAL === type) {
    if (typeof PaypalSourceRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp228 = new PaypalSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    if (type.type !== closure_4.PAYPAL) {
      const _Error17 = Error;
      const _HermesInternal17 = HermesInternal;
      const error1 = new Error("Cannot instantiate PaypalSourceRecord with type: " + type.type + ", must be " + closure_4.PAYPAL);
      throw error1;
    } else {
      tmp228.email = type.email || "";
      return tmp228;
    }
  } else {
    if (closure_4.SOFORT !== type) {
      if (closure_4.SEPA_DEBIT !== type) {
        if (closure_4.GIROPAY === type) {
          if (typeof GiropaySourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp201 = new GiropaySourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.GIROPAY) {
            const _Error15 = Error;
            const _HermesInternal15 = HermesInternal;
            const error2 = new Error("Cannot instantiate GiropaySourceRecord with type: " + type.type + ", must be " + closure_4.GIROPAY);
            throw error2;
          } else {
            return tmp201;
          }
        } else if (closure_4.PRZELEWY24 === type) {
          if (typeof Przelewy24SourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp187 = new Przelewy24SourceRecord(type, tmp5, tmp4, tmp3, tmp2);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.PRZELEWY24) {
            const _Error14 = Error;
            const _HermesInternal14 = HermesInternal;
            const error3 = new Error("Cannot instantiate Przelewy24SourceRecord with type: " + type.type + ", must be " + closure_4.PRZELEWY24);
            throw error3;
          } else {
            tmp187.email = type.email || "";
            tmp187.bank = type.bank;
            return tmp187;
          }
        } else if (closure_4.PAYSAFE_CARD === type) {
          if (typeof PaysafeSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp174 = new PaysafeSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.PAYSAFE_CARD) {
            const _Error13 = Error;
            const _HermesInternal13 = HermesInternal;
            const error4 = new Error("Cannot instantiate PaysafeSourceRecord with type: " + type.type + ", must be " + closure_4.PAYSAFE_CARD);
            throw error4;
          } else {
            return tmp174;
          }
        } else if (closure_4.GCASH === type) {
          if (typeof GcashSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp161 = new GcashSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.GCASH) {
            const _Error12 = Error;
            const _HermesInternal12 = HermesInternal;
            const error5 = new Error("Cannot instantiate GcashSourceRecord with type: " + type.type + ", must be " + closure_4.GCASH);
            throw error5;
          } else {
            return tmp161;
          }
        } else if (closure_4.GRABPAY_MY === type) {
          if (typeof GrabPayMySourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp148 = new GrabPayMySourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.GRABPAY_MY) {
            const _Error11 = Error;
            const _HermesInternal11 = HermesInternal;
            const error6 = new Error("Cannot instantiate GrabPayMySourceRecord with type: " + type.type + ", must be " + closure_4.GRABPAY_MY);
            throw error6;
          } else {
            return tmp148;
          }
        } else if (closure_4.MOMO_WALLET === type) {
          if (typeof MomoWalletSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp135 = new MomoWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.MOMO_WALLET) {
            const _Error10 = Error;
            const _HermesInternal10 = HermesInternal;
            const error7 = new Error("Cannot instantiate MomoWalletSourceRecord with type: " + type.type + ", must be " + closure_4.MOMO_WALLET);
            throw error7;
          } else {
            return tmp135;
          }
        } else if (closure_4.VENMO === type) {
          if (typeof VenmoSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp121 = new VenmoSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.VENMO) {
            const _Error9 = Error;
            const _HermesInternal9 = HermesInternal;
            const error8 = new Error("Cannot instantiate VenmoSourceRecord with type: " + type.type + ", must be " + closure_4.VENMO);
            throw error8;
          } else {
            tmp121.username = type.username || "";
            return tmp121;
          }
        } else if (closure_4.KAKAOPAY === type) {
          if (typeof KaKaoPaySourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp108 = new KaKaoPaySourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.KAKAOPAY) {
            const _Error8 = Error;
            const _HermesInternal8 = HermesInternal;
            const error9 = new Error("Cannot instantiate KaKaoPaySourceRecord with type: " + type.type + ", must be " + closure_4.KAKAOPAY);
            throw error9;
          } else {
            return tmp108;
          }
        } else if (closure_4.GOPAY_WALLET === type) {
          if (typeof GoPayWalletSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp95 = new GoPayWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.GOPAY_WALLET) {
            const _Error7 = Error;
            const _HermesInternal7 = HermesInternal;
            const error10 = new Error("Cannot instantiate GoPayWalletSourceRecord with type: " + type.type + ", must be " + closure_4.GOPAY_WALLET);
            throw error10;
          } else {
            return tmp95;
          }
        } else if (closure_4.BANCONTACT === type) {
          if (typeof BancontactSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp82 = new BancontactSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.BANCONTACT) {
            const _Error6 = Error;
            const _HermesInternal6 = HermesInternal;
            const error11 = new Error("Cannot instantiate BancontactSourceRecord with type: " + type.type + ", must be " + closure_4.BANCONTACT);
            throw error11;
          } else {
            return tmp82;
          }
        } else if (closure_4.EPS === type) {
          if (typeof EPSSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp69 = new EPSSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.EPS) {
            const _Error5 = Error;
            const _HermesInternal5 = HermesInternal;
            const error12 = new Error("Cannot instantiate EPSSourceRecord with type: " + type.type + ", must be " + closure_4.EPS);
            throw error12;
          } else {
            tmp69.bank = type.bank;
            return tmp69;
          }
        } else if (closure_4.IDEAL === type) {
          if (typeof IdealSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp56 = new IdealSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.IDEAL) {
            const _Error4 = Error;
            const _HermesInternal4 = HermesInternal;
            const error13 = new Error("Cannot instantiate IdealSourceRecord with type: " + type.type + ", must be " + closure_4.IDEAL);
            throw error13;
          } else {
            tmp56.bank = type.bank;
            return tmp56;
          }
        } else if (closure_4.CASH_APP === type) {
          if (typeof CashAppSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp42 = new CashAppSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.CASH_APP) {
            const _Error3 = Error;
            const _HermesInternal3 = HermesInternal;
            const error14 = new Error("Cannot instantiate Cashapp with type: " + type.type + ", must be " + closure_4.CASH_APP);
            throw error14;
          } else {
            tmp42.username = type.username || "";
            return tmp42;
          }
        } else if (closure_4.TDS_WALLET === type) {
          if (typeof TDSWalletSourceRecord !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp29 = new TDSWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.TDS_WALLET) {
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            const error15 = new Error("Cannot instantiate TDSWalletSourceRecord with type: " + type.type + ", must be " + closure_4.TDS_WALLET);
            throw error15;
          } else {
            return tmp29;
          }
        } else if (closure_4.PIX === type) {
          if (typeof prototype2 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp16 = new prototype2(type, tmp5, tmp4, tmp3, tmp2, tmp);
          // ThrowIfThisInitialized (0x7c)
          if (type.type !== closure_4.PIX) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error16 = new Error("Cannot instantiate PixSourceRecord with type: " + type.type + ", must be " + closure_4.PIX);
            throw error16;
          } else {
            tmp16.email = type.email;
            return tmp16;
          }
        } else {
          isDiscordFrontendDevelopment.assertNever(type);
        }
      }
    }
    if (typeof SofortSourceRecord !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp214 = new SofortSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    if (type.type !== closure_4.SOFORT) {
      if (type.type !== closure_4.SEPA_DEBIT) {
        const _Error16 = Error;
        const _HermesInternal16 = HermesInternal;
        const error17 = new Error("Cannot instantiate SofortSourceRecord with type: " + type.type + ", must be " + closure_4.SOFORT + " or " + closure_4.SEPA_DEBIT);
        throw error17;
      }
    }
    tmp214.email = type.email || "";
    return tmp214;
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
  set: undefined
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
      error = new Error("Cannot instantiate CreditCardSourceRecord with type: " + global.type + ", must be " + tmp4.CARD);
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
  set: undefined
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
        error = new Error("Cannot instantiate SofortSourceRecord with type: " + global.type + ", must be " + tmp2.SOFORT + " or " + tmp2.SEPA_DEBIT);
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
      error = new Error("Cannot instantiate GiropaySourceRecord with type: " + global.type + ", must be " + tmp4.GIROPAY);
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
      error = new Error("Cannot instantiate Przelewy24SourceRecord with type: " + global.type + ", must be " + tmp2.PRZELEWY24);
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
      error = new Error("Cannot instantiate PaysafeSourceRecord with type: " + global.type + ", must be " + tmp4.PAYSAFE_CARD);
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
      error = new Error("Cannot instantiate GrabPayMySourceRecord with type: " + global.type + ", must be " + tmp4.GRABPAY_MY);
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
      error = new Error("Cannot instantiate MomoWalletSourceRecord with type: " + global.type + ", must be " + tmp4.MOMO_WALLET);
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
      error = new Error("Cannot instantiate KaKaoPaySourceRecord with type: " + global.type + ", must be " + tmp4.KAKAOPAY);
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
      error = new Error("Cannot instantiate GoPayWalletSourceRecord with type: " + global.type + ", must be " + tmp4.GOPAY_WALLET);
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
      error = new Error("Cannot instantiate BancontactSourceRecord with type: " + global.type + ", must be " + tmp4.BANCONTACT);
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
      error = new Error("Cannot instantiate TDSWalletSourceRecord with type: " + global.type + ", must be " + tmp4.TDS_WALLET);
      tmp10 = error;
      throw error;
    } else {
      tmp5 = tmp3;
      return tmp3;
    }
  }
}
const prototype2 = function PixSourceRecord(type) {
  const tmp3 = new prototype2(type, tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  if (type.type !== closure_4.PIX) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Cannot instantiate PixSourceRecord with type: " + type.type + ", must be " + tmp4.PIX);
    throw error;
  } else {
    tmp3.email = type.email;
    return tmp3;
  }
}.prototype;
class prototype2 extends PaymentSourceRecord {
}
const result = require("obj132").fileFinishedImporting("records/PaymentSourceRecord.tsx");
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
    error = new Error("Cannot instantiate AppleSourceRecord with type: " + type.type + ", must be " + closure_4.APPLE);
    throw error;
  } else {
    return tmp5;
  }
}.prototype;
class prototype3 extends PaymentSourceRecord {
}

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
export const PixSourceRecord = prototype2;