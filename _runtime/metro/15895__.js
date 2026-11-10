// _runtime/metro/15895__.js
import _mod15896 from "15896__.js";
import _mod15897 from "15897__.js";

require = arg1;
const dependencyMap = arg6;

export default (code, defaultError) => {
  code = code.code;
  if (_mod15896.ZodIssueCode.invalid_type === code) {
    let str63 = "Required";
    if (code.received !== _mod15897.ZodParsedType.undefined) {
      const _HermesInternal19 = HermesInternal;
      str63 = "Expected " + code.expected + ", received " + code.received;
    }
    let message = str63;
  } else if (_mod15896.ZodIssueCode.invalid_literal === code) {
    const _JSON = JSON;
    const _HermesInternal18 = HermesInternal;
    message = "Invalid literal value, expected " + JSON.stringify(code.expected, _mod15897.util.jsonStringifyReplacer);
  } else if (_mod15896.ZodIssueCode.unrecognized_keys === code) {
    const util4 = _mod15897.util;
    const _HermesInternal17 = HermesInternal;
    message = "Unrecognized key(s) in object: " + util4.joinValues(code.keys, ", ");
  } else {
    let str31 = "Invalid input";
    message = "Invalid input";
    if (_mod15896.ZodIssueCode.invalid_union !== code) {
      if (_mod15896.ZodIssueCode.invalid_union_discriminator === code) {
        const util3 = _mod15897.util;
        const _HermesInternal16 = HermesInternal;
        message = "Invalid discriminator value. Expected " + util3.joinValues(code.options);
      } else if (_mod15896.ZodIssueCode.invalid_enum_value === code) {
        const util2 = _mod15897.util;
        const _HermesInternal15 = HermesInternal;
        message =
          "Invalid enum value. Expected " + util2.joinValues(code.options) + ", received '" + code.received + "'";
      } else {
        message = "Invalid function arguments";
        if (_mod15896.ZodIssueCode.invalid_arguments !== code) {
          message = "Invalid function return type";
          if (_mod15896.ZodIssueCode.invalid_return_type !== code) {
            message = "Invalid date";
            if (_mod15896.ZodIssueCode.invalid_date !== code) {
              if (_mod15896.ZodIssueCode.invalid_string === code) {
                if (typeof code.validation === "object") {
                  const validation = code.validation;
                  if ("includes" in code.validation) {
                    const _HermesInternal14 = HermesInternal;
                    const combined = 'Invalid input: must include "' + validation.includes + '"';
                    message = combined;
                    if (typeof code.validation.position === "number") {
                      const _HermesInternal20 = HermesInternal;
                      message =
                        "" +
                        combined +
                        " at one or more positions greater than or equal to " +
                        code.validation.position;
                    }
                  } else {
                    const validation2 = code.validation;
                    if ("startsWith" in validation) {
                      const _HermesInternal13 = HermesInternal;
                      message = 'Invalid input: must start with "' + validation2.startsWith + '"';
                    } else if ("endsWith" in validation2) {
                      const _HermesInternal12 = HermesInternal;
                      message = 'Invalid input: must end with "' + code.validation.endsWith + '"';
                    } else {
                      const util = _mod15897.util;
                      util.assertNever(code.validation);
                    }
                  }
                } else {
                  let str46 = "Invalid";
                  if ("regex" !== code.validation) {
                    const _HermesInternal11 = HermesInternal;
                    str46 = "Invalid " + code.validation;
                  }
                  message = str46;
                }
              } else if (_mod15896.ZodIssueCode.too_small === code) {
                if ("array" === code.type) {
                  let str40 = "exactly";
                  if (!code.exact) {
                    let str41 = "more than";
                    if (code.inclusive) {
                      str41 = "at least";
                    }
                    str40 = str41;
                  }
                  const _HermesInternal10 = HermesInternal;
                  str31 = "Array must contain " + str40 + " " + code.minimum + " element(s)";
                } else if ("string" === code.type) {
                  let str35 = "exactly";
                  if (!code.exact) {
                    let str36 = "over";
                    if (code.inclusive) {
                      str36 = "at least";
                    }
                    str35 = str36;
                  }
                  const _HermesInternal9 = HermesInternal;
                  str31 = "String must contain " + str35 + " " + code.minimum + " character(s)";
                } else if ("number" === code.type) {
                  let str32 = "exactly equal to ";
                  if (!code.exact) {
                    let str33 = "greater than ";
                    if (code.inclusive) {
                      str33 = "greater than or equal to ";
                    }
                    str32 = str33;
                  }
                  const _HermesInternal8 = HermesInternal;
                  str31 = "Number must be " + str32 + code.minimum;
                } else if ("date" === code.type) {
                  let str28 = "exactly equal to ";
                  if (!code.exact) {
                    let str29 = "greater than ";
                    if (code.inclusive) {
                      str29 = "greater than or equal to ";
                    }
                    str28 = str29;
                  }
                  const _Date2 = Date;
                  const _Number2 = Number;
                  const date = new Date(Number(code.minimum));
                  const _HermesInternal7 = HermesInternal;
                  str31 = "Date must be " + str28 + date;
                }
                message = str31;
              } else if (_mod15896.ZodIssueCode.too_big === code) {
                if ("array" === code.type) {
                  let str21 = "exactly";
                  if (!code.exact) {
                    let str22 = "less than";
                    if (code.inclusive) {
                      str22 = "at most";
                    }
                    str21 = str22;
                  }
                  const _HermesInternal6 = HermesInternal;
                  let combined1 = "Array must contain " + str21 + " " + code.maximum + " element(s)";
                } else if ("string" === code.type) {
                  let str16 = "exactly";
                  if (!code.exact) {
                    let str17 = "under";
                    if (code.inclusive) {
                      str17 = "at most";
                    }
                    str16 = str17;
                  }
                  const _HermesInternal5 = HermesInternal;
                  combined1 = "String must contain " + str16 + " " + code.maximum + " character(s)";
                } else if ("number" === code.type) {
                  let str12 = "exactly";
                  if (!code.exact) {
                    let str13 = "less than";
                    if (code.inclusive) {
                      str13 = "less than or equal to";
                    }
                    str12 = str13;
                  }
                  const _HermesInternal4 = HermesInternal;
                  combined1 = "Number must be " + str12 + " " + code.maximum;
                } else if ("bigint" === code.type) {
                  let str8 = "exactly";
                  if (!code.exact) {
                    let str9 = "less than";
                    if (code.inclusive) {
                      str9 = "less than or equal to";
                    }
                    str8 = str9;
                  }
                  const _HermesInternal3 = HermesInternal;
                  combined1 = "BigInt must be " + str8 + " " + code.maximum;
                } else {
                  combined1 = str31;
                  if ("date" === code.type) {
                    let str4 = "exactly";
                    if (!code.exact) {
                      let str5 = "smaller than";
                      if (code.inclusive) {
                        str5 = "smaller than or equal to";
                      }
                      str4 = str5;
                    }
                    const _Date = Date;
                    const _Number = Number;
                    const date1 = new Date(Number(code.maximum));
                    const _HermesInternal2 = HermesInternal;
                    combined1 = "Date must be " + str4 + " " + date1;
                  }
                }
                message = combined1;
              } else {
                message = str31;
                if (_mod15896.ZodIssueCode.custom !== code) {
                  message = "Intersection results could not be merged";
                  if (_mod15896.ZodIssueCode.invalid_intersection_types !== code) {
                    if (_mod15896.ZodIssueCode.not_multiple_of === code) {
                      const _HermesInternal = HermesInternal;
                      message = "Number must be a multiple of " + code.multipleOf;
                    } else {
                      message = "Number must be finite";
                      if (_mod15896.ZodIssueCode.not_finite !== code) {
                        message = defaultError.defaultError;
                        const util5 = _mod15897.util;
                        util5.assertNever(code);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return { message };
};
