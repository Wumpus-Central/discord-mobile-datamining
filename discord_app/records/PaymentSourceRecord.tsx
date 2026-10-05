// discord_app/records/PaymentSourceRecord.tsx
import GlobalUtils from "../utils/GlobalUtils.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import Record from "../lib/Record.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let billing_address;

let c2;
let c3;
let closure_4;
({ IRREDEEMABLE_PAYMENT_SOURCES: c2, PaymentGateways: c3, PaymentSourceTypes: closure_4 } = Constants);
class PaymentSourceRecord extends Record {
  constructor(type) {
    let flags;
    let invalid;
    const tmp5 = new PaymentSourceRecord(tmp4, tmp3, tmp2, tmp, new.target);
    const values = Object.values(React3);
    if (values.includes(type.type)) {
      ({ id: tmp5.id, type: tmp5.type, paymentGateway: tmp5.paymentGateway, invalid } = type);
      if (invalid == null) {
        invalid = false;
      }
      tmp5.invalid = invalid;
      let billingAddress = type.billingAddress;
      if (billingAddress == null) {
        billingAddress = {};
      }
      tmp5.billingAddress = billingAddress;
      ({ isDefault: tmp5.isDefault, flags } = type);
      if (flags == null) {
        flags = 0;
      }
      tmp5.flags = flags;
      let str2 = type.country;
      if (str2 == null) {
        str2 = "";
      }
      tmp5.country = str2;
      tmp5.pixMetadata = type.pixMetadata;
      return tmp5;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Unrecognized payment source type " + type.type);
      throw error;
    }
  }
  static createFromServer(billing_address) {
    let tmp6;
    billing_address = billing_address.billing_address;
    if (billing_address == null) {
      billing_address = {};
    }
    const obj = {
      id: billing_address.id,
      type: billing_address.type,
      paymentGateway: billing_address.payment_gateway,
      invalid: billing_address.invalid,
      isDefault: billing_address.default,
      billingAddress: {
        name: billing_address.name,
        line1: billing_address.line_1,
        line2: billing_address.line_2,
        city: billing_address.city,
        postalCode: billing_address.postal_code,
        state: billing_address.state,
        country: billing_address.country,
      },
      country: billing_address.country,
      flags: billing_address.flags,
      pixMetadata: tmp6,
    };
    tmp6 = undefined;
    if (null != billing_address.pix) {
      tmp6 = { taxId: billing_address.pix.tax_id };
      const obj2 = { taxId: billing_address.pix.tax_id };
    }
    const type = billing_address.type;
    if (React3.CARD === type) {
      const obj3 = {};
      const merged = Object.assign(obj);
      ({
        brand: obj23.brand,
        last_4: obj23.last4,
        expires_month: obj23.expiresMonth,
        expires_year: obj23.expiresYear,
      } = billing_address);
      const self91 = this;
      if (typeof CreditCardSourceRecord === "function") {
        const self92 = this;
        const self93 = this;
        const tmp220 = new CreditCardSourceRecord(obj3, obj, tmp5, tmp4, tmp3);
        if (obj3.type !== React3.CARD) {
          const _Error19 = Error;
          const _HermesInternal19 = HermesInternal;
          const self94 = this;
          const self95 = this;
          const error = new Error(
            "Cannot instantiate CreditCardSourceRecord with type: " + obj3.type + ", must be " + React3.CARD,
          );
          throw error;
        } else {
          let str38 = obj3.brand;
          if (str38 == null) {
            str38 = "";
          }
          tmp220.brand = str38;
          let str39 = obj3.last4;
          if (str39 == null) {
            str39 = "";
          }
          tmp220.last4 = str39;
          let num = obj3.expiresMonth;
          if (num == null) {
            num = 0;
          }
          tmp220.expiresMonth = num;
          let num2 = obj3.expiresYear;
          if (num2 == null) {
            num2 = 0;
          }
          tmp220.expiresYear = num2;
          return tmp220;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (React3.PAYPAL === type) {
      const obj5 = { email: billing_address.email };
      const merged1 = Object.assign(obj);
      const self86 = this;
      if (typeof PaypalSourceRecord === "function") {
        const self87 = this;
        const self88 = this;
        const tmp208 = new PaypalSourceRecord(obj5, obj, tmp5, tmp4, tmp3, tmp2, tmp, this, PaypalSourceRecord);
        if (obj5.type !== React3.PAYPAL) {
          const _Error18 = Error;
          const _HermesInternal18 = HermesInternal;
          const self89 = this;
          const self90 = this;
          const error1 = new Error(
            "Cannot instantiate PaypalSourceRecord with type: " + obj5.type + ", must be " + React3.PAYPAL,
          );
          throw error1;
        } else {
          const tmp209 = obj5.email || "";
          tmp208.email = tmp209;
          return tmp208;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (React3.VENMO === type) {
      const obj6 = { username: billing_address.username };
      const merged2 = Object.assign(obj);
      const self81 = this;
      if (typeof VenmoSourceRecord === "function") {
        const self82 = this;
        const self83 = this;
        const tmp196 = new VenmoSourceRecord(obj6, obj, tmp5, tmp4, tmp3, tmp2, tmp, this, VenmoSourceRecord);
        if (obj6.type !== React3.VENMO) {
          const _Error17 = Error;
          const _HermesInternal17 = HermesInternal;
          const self84 = this;
          const self85 = this;
          const error2 = new Error(
            "Cannot instantiate VenmoSourceRecord with type: " + obj6.type + ", must be " + React3.VENMO,
          );
          throw error2;
        } else {
          const tmp197 = obj6.username || "";
          tmp196.username = tmp197;
          return tmp196;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if (React3.SEPA_DEBIT !== type) {
        if (React3.SOFORT !== type) {
          if (React3.GIROPAY === type) {
            const obj7 = {};
            const merged3 = Object.assign(obj);
            const self71 = this;
            if (typeof GiropaySourceRecord === "function") {
              const self72 = this;
              const self73 = this;
              const tmp173 = new GiropaySourceRecord(
                obj7,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                GiropaySourceRecord,
                this,
                obj,
              );
              if (obj7.type !== React3.GIROPAY) {
                const _Error15 = Error;
                const _HermesInternal15 = HermesInternal;
                const self74 = this;
                const self75 = this;
                const error3 = new Error(
                  "Cannot instantiate GiropaySourceRecord with type: " + obj7.type + ", must be " + React3.GIROPAY,
                );
                throw error3;
              } else {
                return tmp173;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PRZELEWY24 === type) {
            const obj8 = {};
            const merged4 = Object.assign(obj);
            ({ email: obj18.email, bank: obj18.bank } = billing_address);
            const self66 = this;
            if (typeof Przelewy24SourceRecord === "function") {
              const self67 = this;
              const self68 = this;
              const tmp161 = new Przelewy24SourceRecord(
                obj8,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                this,
                Przelewy24SourceRecord,
              );
              if (obj8.type !== React3.PRZELEWY24) {
                const _Error14 = Error;
                const _HermesInternal14 = HermesInternal;
                const self69 = this;
                const self70 = this;
                const error4 = new Error(
                  "Cannot instantiate Przelewy24SourceRecord with type: " +
                    obj8.type +
                    ", must be " +
                    React3.PRZELEWY24,
                );
                throw error4;
              } else {
                const tmp162 = obj8.email || "";
                tmp161.email = tmp162;
                tmp161.bank = obj8.bank;
                return tmp161;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.EPS === type) {
            const obj9 = { bank: billing_address.bank };
            const merged5 = Object.assign(obj);
            const self61 = this;
            if (typeof EPSSourceRecord === "function") {
              const self62 = this;
              const self63 = this;
              const tmp150 = new EPSSourceRecord(obj9, obj, tmp5, tmp4, tmp3, tmp2, tmp, EPSSourceRecord, this, obj);
              if (obj9.type !== React3.EPS) {
                const _Error13 = Error;
                const _HermesInternal13 = HermesInternal;
                const self64 = this;
                const self65 = this;
                const error5 = new Error(
                  "Cannot instantiate EPSSourceRecord with type: " + obj9.type + ", must be " + React3.EPS,
                );
                throw error5;
              } else {
                tmp150.bank = obj9.bank;
                return tmp150;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PAYSAFE_CARD === type) {
            const obj10 = {};
            const merged6 = Object.assign(obj);
            const self56 = this;
            if (typeof PaysafeSourceRecord === "function") {
              const self57 = this;
              const self58 = this;
              const tmp139 = new PaysafeSourceRecord(
                obj10,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                PaysafeSourceRecord,
                this,
                obj,
              );
              if (obj10.type !== React3.PAYSAFE_CARD) {
                const _Error12 = Error;
                const _HermesInternal12 = HermesInternal;
                const self59 = this;
                const self60 = this;
                const error6 = new Error(
                  "Cannot instantiate PaysafeSourceRecord with type: " +
                    obj10.type +
                    ", must be " +
                    React3.PAYSAFE_CARD,
                );
                throw error6;
              } else {
                return tmp139;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.GCASH === type) {
            const obj11 = {};
            const merged7 = Object.assign(obj);
            const self51 = this;
            if (typeof GcashSourceRecord === "function") {
              const self52 = this;
              const self53 = this;
              const tmp128 = new GcashSourceRecord(
                obj11,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                GcashSourceRecord,
                this,
                obj,
              );
              if (obj11.type !== React3.GCASH) {
                const _Error11 = Error;
                const _HermesInternal11 = HermesInternal;
                const self54 = this;
                const self55 = this;
                const error7 = new Error(
                  "Cannot instantiate GcashSourceRecord with type: " + obj11.type + ", must be " + React3.GCASH,
                );
                throw error7;
              } else {
                return tmp128;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.GRABPAY_MY === type) {
            const obj12 = {};
            const merged8 = Object.assign(obj);
            const self46 = this;
            if (typeof GrabPayMySourceRecord === "function") {
              const self47 = this;
              const self48 = this;
              const tmp117 = new GrabPayMySourceRecord(
                obj12,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                GrabPayMySourceRecord,
                this,
                obj,
              );
              if (obj12.type !== React3.GRABPAY_MY) {
                const _Error10 = Error;
                const _HermesInternal10 = HermesInternal;
                const self49 = this;
                const self50 = this;
                const error8 = new Error(
                  "Cannot instantiate GrabPayMySourceRecord with type: " +
                    obj12.type +
                    ", must be " +
                    React3.GRABPAY_MY,
                );
                throw error8;
              } else {
                return tmp117;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.MOMO_WALLET === type) {
            const obj13 = {};
            const merged9 = Object.assign(obj);
            const self41 = this;
            if (typeof MomoWalletSourceRecord === "function") {
              const self42 = this;
              const self43 = this;
              const tmp106 = new MomoWalletSourceRecord(
                obj13,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                MomoWalletSourceRecord,
                this,
                obj,
              );
              if (obj13.type !== React3.MOMO_WALLET) {
                const _Error9 = Error;
                const _HermesInternal9 = HermesInternal;
                const self44 = this;
                const self45 = this;
                const error9 = new Error(
                  "Cannot instantiate MomoWalletSourceRecord with type: " +
                    obj13.type +
                    ", must be " +
                    React3.MOMO_WALLET,
                );
                throw error9;
              } else {
                return tmp106;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.KAKAOPAY === type) {
            const obj14 = {};
            const merged10 = Object.assign(obj);
            const self36 = this;
            if (typeof KaKaoPaySourceRecord === "function") {
              const self37 = this;
              const self38 = this;
              const tmp95 = new KaKaoPaySourceRecord(
                obj14,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                KaKaoPaySourceRecord,
                this,
                obj,
              );
              if (obj14.type !== React3.KAKAOPAY) {
                const _Error8 = Error;
                const _HermesInternal8 = HermesInternal;
                const self39 = this;
                const self40 = this;
                const error10 = new Error(
                  "Cannot instantiate KaKaoPaySourceRecord with type: " + obj14.type + ", must be " + React3.KAKAOPAY,
                );
                throw error10;
              } else {
                return tmp95;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.GOPAY_WALLET === type) {
            const obj15 = {};
            const merged11 = Object.assign(obj);
            const self31 = this;
            if (typeof GoPayWalletSourceRecord === "function") {
              const self32 = this;
              const self33 = this;
              const tmp84 = new GoPayWalletSourceRecord(
                obj15,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                GoPayWalletSourceRecord,
                this,
                obj,
              );
              if (obj15.type !== React3.GOPAY_WALLET) {
                const _Error7 = Error;
                const _HermesInternal7 = HermesInternal;
                const self34 = this;
                const self35 = this;
                const error11 = new Error(
                  "Cannot instantiate GoPayWalletSourceRecord with type: " +
                    obj15.type +
                    ", must be " +
                    React3.GOPAY_WALLET,
                );
                throw error11;
              } else {
                return tmp84;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.BANCONTACT === type) {
            const obj16 = {};
            const merged12 = Object.assign(obj);
            const self26 = this;
            if (typeof BancontactSourceRecord === "function") {
              const self27 = this;
              const self28 = this;
              const tmp73 = new BancontactSourceRecord(
                obj16,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                BancontactSourceRecord,
                this,
                obj,
              );
              if (obj16.type !== React3.BANCONTACT) {
                const _Error6 = Error;
                const _HermesInternal6 = HermesInternal;
                const self29 = this;
                const self30 = this;
                const error12 = new Error(
                  "Cannot instantiate BancontactSourceRecord with type: " +
                    obj16.type +
                    ", must be " +
                    React3.BANCONTACT,
                );
                throw error12;
              } else {
                return tmp73;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.IDEAL === type) {
            const obj17 = { bank: billing_address.bank };
            const merged13 = Object.assign(obj);
            const self21 = this;
            if (typeof IdealSourceRecord === "function") {
              const self22 = this;
              const self23 = this;
              const tmp62 = new IdealSourceRecord(
                obj17,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                IdealSourceRecord,
                this,
                obj,
              );
              if (obj17.type !== React3.IDEAL) {
                const _Error5 = Error;
                const _HermesInternal5 = HermesInternal;
                const self24 = this;
                const self25 = this;
                const error13 = new Error(
                  "Cannot instantiate IdealSourceRecord with type: " + obj17.type + ", must be " + React3.IDEAL,
                );
                throw error13;
              } else {
                tmp62.bank = obj17.bank;
                return tmp62;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.CASH_APP === type) {
            const obj19 = { username: billing_address.username };
            const merged14 = Object.assign(obj);
            const self16 = this;
            if (typeof CashAppSourceRecord === "function") {
              const self17 = this;
              const self18 = this;
              const tmp50 = new CashAppSourceRecord(obj19, obj, tmp5, tmp4, tmp3, tmp2, tmp, this, CashAppSourceRecord);
              if (obj19.type !== React3.CASH_APP) {
                const _Error4 = Error;
                const _HermesInternal4 = HermesInternal;
                const self19 = this;
                const self20 = this;
                const error14 = new Error(
                  "Cannot instantiate Cashapp with type: " + obj19.type + ", must be " + React3.CASH_APP,
                );
                throw error14;
              } else {
                const tmp51 = obj19.username || "";
                tmp50.username = tmp51;
                return tmp50;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.TDS_WALLET === type) {
            const obj20 = {};
            const merged15 = Object.assign(obj);
            const self11 = this;
            if (typeof TDSWalletSourceRecord === "function") {
              const self12 = this;
              const self13 = this;
              const tmp39 = new TDSWalletSourceRecord(
                obj20,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                TDSWalletSourceRecord,
                this,
                obj,
              );
              if (obj20.type !== React3.TDS_WALLET) {
                const _Error3 = Error;
                const _HermesInternal3 = HermesInternal;
                const self14 = this;
                const self15 = this;
                const error15 = new Error(
                  "Cannot instantiate TDSWalletSourceRecord with type: " +
                    obj20.type +
                    ", must be " +
                    React3.TDS_WALLET,
                );
                throw error15;
              } else {
                return tmp39;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PIX === type) {
            const obj21 = { email: billing_address.email };
            const merged16 = Object.assign(obj);
            const self6 = this;
            if (typeof PixSourceRecord === "function") {
              const self7 = this;
              const self8 = this;
              const tmp28 = new PixSourceRecord(obj21, obj, tmp5, tmp4, tmp3, tmp2, tmp, PixSourceRecord, this, obj);
              if (obj21.type !== React3.PIX) {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const self9 = this;
                const self10 = this;
                const error16 = new Error(
                  "Cannot instantiate PixSourceRecord with type: " + obj21.type + ", must be " + React3.PIX,
                );
                throw error16;
              } else {
                tmp28.email = obj21.email;
                return tmp28;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PIX_AUTOMATICO === type) {
            const obj22 = { email: billing_address.email };
            const merged17 = Object.assign(obj);
            const self = this;
            if (typeof PixAutomaticoSourceRecord === "function") {
              const self2 = this;
              const self3 = this;
              const tmp17 = new PixAutomaticoSourceRecord(
                obj22,
                obj,
                tmp5,
                tmp4,
                tmp3,
                tmp2,
                tmp,
                PixAutomaticoSourceRecord,
                this,
                obj,
              );
              if (obj22.type !== React3.PIX_AUTOMATICO) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self4 = this;
                const self5 = this;
                const error17 = new Error(
                  "Cannot instantiate PixAutomaticoSourceRecord with type: " +
                    obj22.type +
                    ", must be " +
                    React3.PIX_AUTOMATICO,
                );
                throw error17;
              } else {
                tmp17.email = obj22.email;
                return tmp17;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const obj4 = GlobalUtils;
            obj4.assertNever(billing_address);
          }
        }
      }
      const obj44 = { email: billing_address.email };
      const merged18 = Object.assign(obj);
      const self76 = this;
      if (typeof SofortSourceRecord === "function") {
        const self77 = this;
        const self78 = this;
        const tmp184 = new SofortSourceRecord(obj44, obj, tmp5, tmp4, tmp3, tmp2, tmp, this, SofortSourceRecord);
        if (obj44.type !== React3.SOFORT) {
          if (obj44.type !== React3.SEPA_DEBIT) {
            const _Error16 = Error;
            const _HermesInternal16 = HermesInternal;
            const self79 = this;
            const self80 = this;
            const error18 = new Error(
              "Cannot instantiate SofortSourceRecord with type: " +
                obj44.type +
                ", must be " +
                React3.SOFORT +
                " or " +
                React3.SEPA_DEBIT,
            );
            throw error18;
          }
        }
        const tmp185 = obj44.email || "";
        tmp184.email = tmp185;
        return tmp184;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  static createFromSerialized(type) {
    type = type.type;
    if (React3.CARD === type) {
      const self91 = this;
      if (typeof CreditCardSourceRecord === "function") {
        const self92 = this;
        const self93 = this;
        const tmp162 = new CreditCardSourceRecord(type, tmp5, tmp4);
        if (type.type !== React3.CARD) {
          const _Error19 = Error;
          const _HermesInternal19 = HermesInternal;
          const self94 = this;
          const self95 = this;
          const error = new Error(
            "Cannot instantiate CreditCardSourceRecord with type: " + type.type + ", must be " + React3.CARD,
          );
          throw error;
        } else {
          let str38 = type.brand;
          if (str38 == null) {
            str38 = "";
          }
          tmp162.brand = str38;
          let str39 = type.last4;
          if (str39 == null) {
            str39 = "";
          }
          tmp162.last4 = str39;
          let num = type.expiresMonth;
          if (num == null) {
            num = 0;
          }
          tmp162.expiresMonth = num;
          let num2 = type.expiresYear;
          if (num2 == null) {
            num2 = 0;
          }
          tmp162.expiresYear = num2;
          return tmp162;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (React3.PAYPAL === type) {
      const self86 = this;
      if (typeof PaypalSourceRecord === "function") {
        const self87 = this;
        const self88 = this;
        const tmp153 = new PaypalSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
        if (type.type !== React3.PAYPAL) {
          const _Error18 = Error;
          const _HermesInternal18 = HermesInternal;
          const self89 = this;
          const self90 = this;
          const error1 = new Error(
            "Cannot instantiate PaypalSourceRecord with type: " + type.type + ", must be " + React3.PAYPAL,
          );
          throw error1;
        } else {
          const tmp154 = type.email || "";
          tmp153.email = tmp154;
          return tmp153;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if (React3.SOFORT !== type) {
        if (React3.SEPA_DEBIT !== type) {
          if (React3.GIROPAY === type) {
            const self76 = this;
            if (typeof GiropaySourceRecord === "function") {
              const self77 = this;
              const self78 = this;
              const tmp136 = new GiropaySourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.GIROPAY) {
                const _Error16 = Error;
                const _HermesInternal16 = HermesInternal;
                const self79 = this;
                const self80 = this;
                const error2 = new Error(
                  "Cannot instantiate GiropaySourceRecord with type: " + type.type + ", must be " + React3.GIROPAY,
                );
                throw error2;
              } else {
                return tmp136;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PRZELEWY24 === type) {
            const self71 = this;
            if (typeof Przelewy24SourceRecord === "function") {
              const self72 = this;
              const self73 = this;
              const tmp127 = new Przelewy24SourceRecord(type, tmp5, tmp4, tmp3, tmp2);
              if (type.type !== React3.PRZELEWY24) {
                const _Error15 = Error;
                const _HermesInternal15 = HermesInternal;
                const self74 = this;
                const self75 = this;
                const error3 = new Error(
                  "Cannot instantiate Przelewy24SourceRecord with type: " +
                    type.type +
                    ", must be " +
                    React3.PRZELEWY24,
                );
                throw error3;
              } else {
                const tmp128 = type.email || "";
                tmp127.email = tmp128;
                tmp127.bank = type.bank;
                return tmp127;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PAYSAFE_CARD === type) {
            const self66 = this;
            if (typeof PaysafeSourceRecord === "function") {
              const self67 = this;
              const self68 = this;
              const tmp119 = new PaysafeSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.PAYSAFE_CARD) {
                const _Error14 = Error;
                const _HermesInternal14 = HermesInternal;
                const self69 = this;
                const self70 = this;
                const error4 = new Error(
                  "Cannot instantiate PaysafeSourceRecord with type: " + type.type + ", must be " + React3.PAYSAFE_CARD,
                );
                throw error4;
              } else {
                return tmp119;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.GCASH === type) {
            const self61 = this;
            if (typeof GcashSourceRecord === "function") {
              const self62 = this;
              const self63 = this;
              const tmp111 = new GcashSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.GCASH) {
                const _Error13 = Error;
                const _HermesInternal13 = HermesInternal;
                const self64 = this;
                const self65 = this;
                const error5 = new Error(
                  "Cannot instantiate GcashSourceRecord with type: " + type.type + ", must be " + React3.GCASH,
                );
                throw error5;
              } else {
                return tmp111;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.GRABPAY_MY === type) {
            const self56 = this;
            if (typeof GrabPayMySourceRecord === "function") {
              const self57 = this;
              const self58 = this;
              const tmp103 = new GrabPayMySourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.GRABPAY_MY) {
                const _Error12 = Error;
                const _HermesInternal12 = HermesInternal;
                const self59 = this;
                const self60 = this;
                const error6 = new Error(
                  "Cannot instantiate GrabPayMySourceRecord with type: " + type.type + ", must be " + React3.GRABPAY_MY,
                );
                throw error6;
              } else {
                return tmp103;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.MOMO_WALLET === type) {
            const self51 = this;
            if (typeof MomoWalletSourceRecord === "function") {
              const self52 = this;
              const self53 = this;
              const tmp95 = new MomoWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.MOMO_WALLET) {
                const _Error11 = Error;
                const _HermesInternal11 = HermesInternal;
                const self54 = this;
                const self55 = this;
                const error7 = new Error(
                  "Cannot instantiate MomoWalletSourceRecord with type: " +
                    type.type +
                    ", must be " +
                    React3.MOMO_WALLET,
                );
                throw error7;
              } else {
                return tmp95;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.VENMO === type) {
            const self46 = this;
            if (typeof VenmoSourceRecord === "function") {
              const self47 = this;
              const self48 = this;
              const tmp86 = new VenmoSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
              if (type.type !== React3.VENMO) {
                const _Error10 = Error;
                const _HermesInternal10 = HermesInternal;
                const self49 = this;
                const self50 = this;
                const error8 = new Error(
                  "Cannot instantiate VenmoSourceRecord with type: " + type.type + ", must be " + React3.VENMO,
                );
                throw error8;
              } else {
                const tmp87 = type.username || "";
                tmp86.username = tmp87;
                return tmp86;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.KAKAOPAY === type) {
            const self41 = this;
            if (typeof KaKaoPaySourceRecord === "function") {
              const self42 = this;
              const self43 = this;
              const tmp78 = new KaKaoPaySourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.KAKAOPAY) {
                const _Error9 = Error;
                const _HermesInternal9 = HermesInternal;
                const self44 = this;
                const self45 = this;
                const error9 = new Error(
                  "Cannot instantiate KaKaoPaySourceRecord with type: " + type.type + ", must be " + React3.KAKAOPAY,
                );
                throw error9;
              } else {
                return tmp78;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.GOPAY_WALLET === type) {
            const self36 = this;
            if (typeof GoPayWalletSourceRecord === "function") {
              const self37 = this;
              const self38 = this;
              const tmp70 = new GoPayWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.GOPAY_WALLET) {
                const _Error8 = Error;
                const _HermesInternal8 = HermesInternal;
                const self39 = this;
                const self40 = this;
                const error10 = new Error(
                  "Cannot instantiate GoPayWalletSourceRecord with type: " +
                    type.type +
                    ", must be " +
                    React3.GOPAY_WALLET,
                );
                throw error10;
              } else {
                return tmp70;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.BANCONTACT === type) {
            const self31 = this;
            if (typeof BancontactSourceRecord === "function") {
              const self32 = this;
              const self33 = this;
              const tmp62 = new BancontactSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.BANCONTACT) {
                const _Error7 = Error;
                const _HermesInternal7 = HermesInternal;
                const self34 = this;
                const self35 = this;
                const error11 = new Error(
                  "Cannot instantiate BancontactSourceRecord with type: " +
                    type.type +
                    ", must be " +
                    React3.BANCONTACT,
                );
                throw error11;
              } else {
                return tmp62;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.EPS === type) {
            const self26 = this;
            if (typeof EPSSourceRecord === "function") {
              const self27 = this;
              const self28 = this;
              const tmp54 = new EPSSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.EPS) {
                const _Error6 = Error;
                const _HermesInternal6 = HermesInternal;
                const self29 = this;
                const self30 = this;
                const error12 = new Error(
                  "Cannot instantiate EPSSourceRecord with type: " + type.type + ", must be " + React3.EPS,
                );
                throw error12;
              } else {
                tmp54.bank = type.bank;
                return tmp54;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.IDEAL === type) {
            const self21 = this;
            if (typeof IdealSourceRecord === "function") {
              const self22 = this;
              const self23 = this;
              const tmp46 = new IdealSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.IDEAL) {
                const _Error5 = Error;
                const _HermesInternal5 = HermesInternal;
                const self24 = this;
                const self25 = this;
                const error13 = new Error(
                  "Cannot instantiate IdealSourceRecord with type: " + type.type + ", must be " + React3.IDEAL,
                );
                throw error13;
              } else {
                tmp46.bank = type.bank;
                return tmp46;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.CASH_APP === type) {
            const self16 = this;
            if (typeof CashAppSourceRecord === "function") {
              const self17 = this;
              const self18 = this;
              const tmp37 = new CashAppSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
              if (type.type !== React3.CASH_APP) {
                const _Error4 = Error;
                const _HermesInternal4 = HermesInternal;
                const self19 = this;
                const self20 = this;
                const error14 = new Error(
                  "Cannot instantiate Cashapp with type: " + type.type + ", must be " + React3.CASH_APP,
                );
                throw error14;
              } else {
                const tmp38 = type.username || "";
                tmp37.username = tmp38;
                return tmp37;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.TDS_WALLET === type) {
            const self11 = this;
            if (typeof TDSWalletSourceRecord === "function") {
              const self12 = this;
              const self13 = this;
              const tmp29 = new TDSWalletSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.TDS_WALLET) {
                const _Error3 = Error;
                const _HermesInternal3 = HermesInternal;
                const self14 = this;
                const self15 = this;
                const error15 = new Error(
                  "Cannot instantiate TDSWalletSourceRecord with type: " + type.type + ", must be " + React3.TDS_WALLET,
                );
                throw error15;
              } else {
                return tmp29;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PIX === type) {
            const self6 = this;
            if (typeof PixSourceRecord === "function") {
              const self7 = this;
              const self8 = this;
              const tmp21 = new PixSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.PIX) {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const self9 = this;
                const self10 = this;
                const error16 = new Error(
                  "Cannot instantiate PixSourceRecord with type: " + type.type + ", must be " + React3.PIX,
                );
                throw error16;
              } else {
                tmp21.email = type.email;
                return tmp21;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (React3.PIX_AUTOMATICO === type) {
            const self = this;
            if (typeof PixAutomaticoSourceRecord === "function") {
              const self2 = this;
              const self3 = this;
              const tmp13 = new PixAutomaticoSourceRecord(type, tmp5, tmp4, tmp3, tmp2, tmp);
              if (type.type !== React3.PIX_AUTOMATICO) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self4 = this;
                const self5 = this;
                const error17 = new Error(
                  "Cannot instantiate PixAutomaticoSourceRecord with type: " +
                    type.type +
                    ", must be " +
                    React3.PIX_AUTOMATICO,
                );
                throw error17;
              } else {
                tmp13.email = type.email;
                return tmp13;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const obj = GlobalUtils;
            obj.assertNever(type);
          }
        }
      }
      const self81 = this;
      if (typeof SofortSourceRecord === "function") {
        const self82 = this;
        const self83 = this;
        const tmp144 = new SofortSourceRecord(type, tmp5, tmp4, tmp3, tmp2);
        if (type.type !== React3.SOFORT) {
          if (type.type !== React3.SEPA_DEBIT) {
            const _Error17 = Error;
            const _HermesInternal17 = HermesInternal;
            const self84 = this;
            const self85 = this;
            const error18 = new Error(
              "Cannot instantiate SofortSourceRecord with type: " +
                type.type +
                ", must be " +
                React3.SOFORT +
                " or " +
                React3.SEPA_DEBIT,
            );
            throw error18;
          }
        }
        const tmp145 = type.email || "";
        tmp144.email = tmp145;
        return tmp144;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  hasFlag(FIND_BY_EMAIL) {
    const obj = FlagUtils;
    return obj.hasFlag(this.flags, FIND_BY_EMAIL);
  }
  canRedeemTrial() {
    return !set.has(this.type);
  }
}
Object.defineProperty(PaymentSourceRecord.prototype, "paymentMethodCountry", {
  get: function paymentMethodCountry() {
    const self = this;
    if (null != this.country) {
      let country;
      if ("" !== self.country) {
        country = self.country;
      }
      return country;
    }
    country = self.billingAddress.country;
  },
  set: undefined,
});
class CreditCardSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new CreditCardSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.CARD) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate CreditCardSourceRecord with type: " + type.type + ", must be " + tmp4.CARD,
      );
      throw error;
    } else {
      let str = type.brand;
      if (str == null) {
        str = "";
      }
      tmp3.brand = str;
      let str2 = type.last4;
      if (str2 == null) {
        str2 = "";
      }
      tmp3.last4 = str2;
      let num = type.expiresMonth;
      if (num == null) {
        num = 0;
      }
      tmp3.expiresMonth = num;
      let num2 = type.expiresYear;
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
    return "link" === this.brand && "0000" === this.last4;
  },
  set: undefined,
});
class PaypalSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp = new PaypalSourceRecord(type);
    if (type.type !== React3.PAYPAL) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate PaypalSourceRecord with type: " + type.type + ", must be " + tmp2.PAYPAL,
      );
      throw error;
    } else {
      const tmp3 = type.email || "";
      tmp.email = tmp3;
      return tmp;
    }
  }
}
class SofortSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp = new SofortSourceRecord(type);
    if (type.type !== React3.SOFORT) {
      if (type.type !== React3.SEPA_DEBIT) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error(
          "Cannot instantiate SofortSourceRecord with type: " +
            type.type +
            ", must be " +
            React3.SOFORT +
            " or " +
            React3.SEPA_DEBIT,
        );
        throw error;
      }
    }
    const tmp3 = type.email || "";
    tmp.email = tmp3;
    return tmp;
  }
}
class GiropaySourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new GiropaySourceRecord(type, tmp2, tmp);
    if (type.type !== React3.GIROPAY) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate GiropaySourceRecord with type: " + type.type + ", must be " + tmp4.GIROPAY,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class Przelewy24SourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp = new Przelewy24SourceRecord(type);
    if (type.type !== React3.PRZELEWY24) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate Przelewy24SourceRecord with type: " + type.type + ", must be " + tmp2.PRZELEWY24,
      );
      throw error;
    } else {
      const tmp3 = type.email || "";
      tmp.email = tmp3;
      tmp.bank = type.bank;
      return tmp;
    }
  }
}
class EPSSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new EPSSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.EPS) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot instantiate EPSSourceRecord with type: " + type.type + ", must be " + tmp4.EPS);
      throw error;
    } else {
      tmp3.bank = type.bank;
      return tmp3;
    }
  }
}
class IdealSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new IdealSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.IDEAL) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate IdealSourceRecord with type: " + type.type + ", must be " + tmp4.IDEAL,
      );
      throw error;
    } else {
      tmp3.bank = type.bank;
      return tmp3;
    }
  }
}
class PaysafeSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new PaysafeSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.PAYSAFE_CARD) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate PaysafeSourceRecord with type: " + type.type + ", must be " + tmp4.PAYSAFE_CARD,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class GcashSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new GcashSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.GCASH) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate GcashSourceRecord with type: " + type.type + ", must be " + tmp4.GCASH,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class GrabPayMySourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new GrabPayMySourceRecord(type, tmp2, tmp);
    if (type.type !== React3.GRABPAY_MY) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate GrabPayMySourceRecord with type: " + type.type + ", must be " + tmp4.GRABPAY_MY,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class MomoWalletSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new MomoWalletSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.MOMO_WALLET) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate MomoWalletSourceRecord with type: " + type.type + ", must be " + tmp4.MOMO_WALLET,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class VenmoSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp = new VenmoSourceRecord(type);
    if (type.type !== React3.VENMO) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate VenmoSourceRecord with type: " + type.type + ", must be " + tmp2.VENMO,
      );
      throw error;
    } else {
      const tmp3 = type.username || "";
      tmp.username = tmp3;
      return tmp;
    }
  }
}
class KaKaoPaySourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new KaKaoPaySourceRecord(type, tmp2, tmp);
    if (type.type !== React3.KAKAOPAY) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate KaKaoPaySourceRecord with type: " + type.type + ", must be " + tmp4.KAKAOPAY,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class GoPayWalletSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new GoPayWalletSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.GOPAY_WALLET) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate GoPayWalletSourceRecord with type: " + type.type + ", must be " + tmp4.GOPAY_WALLET,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class BancontactSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new BancontactSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.BANCONTACT) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate BancontactSourceRecord with type: " + type.type + ", must be " + tmp4.BANCONTACT,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class CashAppSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp = new CashAppSourceRecord(type);
    if (type.type !== React3.CASH_APP) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot instantiate Cashapp with type: " + type.type + ", must be " + tmp2.CASH_APP);
      throw error;
    } else {
      const tmp3 = type.username || "";
      tmp.username = tmp3;
      return tmp;
    }
  }
}
class TDSWalletSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new TDSWalletSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.TDS_WALLET) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate TDSWalletSourceRecord with type: " + type.type + ", must be " + tmp4.TDS_WALLET,
      );
      throw error;
    } else {
      return tmp3;
    }
  }
}
class PixSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new PixSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.PIX) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Cannot instantiate PixSourceRecord with type: " + type.type + ", must be " + tmp4.PIX);
      throw error;
    } else {
      tmp3.email = type.email;
      return tmp3;
    }
  }
}
class PixAutomaticoSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    const tmp3 = new PixAutomaticoSourceRecord(type, tmp2, tmp);
    if (type.type !== React3.PIX_AUTOMATICO) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate PixAutomaticoSourceRecord with type: " + type.type + ", must be " + tmp4.PIX_AUTOMATICO,
      );
      throw error;
    } else {
      tmp3.email = type.email;
      return tmp3;
    }
  }
}
const result = size.fileFinishedImporting("records/PaymentSourceRecord.tsx");
class AppleSourceRecord extends PaymentSourceRecord {
  constructor(type) {
    type.id = "";
    type.paymentGateway = constants.APPLE_PARTNER;
    type.type = React3.APPLE;
    type.billingAddress = {};
    type.country = "";
    type.invalid = false;
    type.isDefault = false;
    type.flags = 0;
    const tmp5 = new AppleSourceRecord(type, tmp3, tmp2, tmp, new.target);
    if (type.type !== React3.APPLE) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Cannot instantiate AppleSourceRecord with type: " + type.type + ", must be " + React3.APPLE,
      );
      throw error;
    } else {
      return tmp5;
    }
  }
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
export { AppleSourceRecord };
export { TDSWalletSourceRecord };
export { PixSourceRecord };
export { PixAutomaticoSourceRecord };
