// === Module 12654: ? ===

// Module 12654
function charCodeCategory(charCodeAtResult) {
  if (charCodeAtResult < 128) {
    let NameStart = arr[charCodeAtResult];
  } else {
    NameStart = charCodeCategory.NameStart;
  }
  return NameStart;
}
const arr = new Array(128);
charCodeCategory.Eof = 128;
charCodeCategory.WhiteSpace = 130;
charCodeCategory.Digit = 131;
charCodeCategory.NameStart = 132;
charCodeCategory.NonPrintable = 133;
for (let num = 0; num < arr.length; num = num + 1) {
  let tmp = 10 === num;
  if (10 !== num) {
    tmp = 13 === num;
  }
  if (!tmp) {
    tmp = 12 === num;
  }
  if (!tmp) {
    tmp = 32 === num;
  }
  if (!tmp) {
    tmp = 9 === num;
  }
  if (tmp === true) {
    arr[num] = charCodeCategory.WhiteSpace;
  } else {
    let tmp3 = num >= 48;
    if (48 <= num) {
      tmp3 = num <= 57;
    }
    if (tmp3 === true) {
      arr[num] = charCodeCategory.Digit;
    } else {
      let tmp4 = num >= 65;
      if (65 <= num) {
        tmp4 = num <= 90;
      }
      if (!tmp4) {
        let tmp5 = num >= 97;
        if (97 <= num) {
          tmp5 = num <= 122;
        }
        tmp4 = tmp5;
      }
      if (!tmp4) {
        tmp4 = num >= 128;
      }
      if (!tmp4) {
        tmp4 = 95 === num;
      }
      if (tmp4 === true) {
        arr[num] = charCodeCategory.NameStart;
      } else {
        let tmp6 = num >= 0;
        if (0 <= num) {
          tmp6 = num <= 8;
        }
        if (!tmp6) {
          tmp6 = 11 === num;
        }
        if (!tmp6) {
          let tmp7 = num >= 14;
          if (14 <= num) {
            tmp7 = num <= 31;
          }
          tmp6 = tmp7;
        }
        if (!tmp6) {
          tmp6 = 127 === num;
        }
        if (tmp6 === true) {
          arr[num] = charCodeCategory.NonPrintable;
        } else {
          let Eof = num;
          if (!num) {
            Eof = charCodeCategory.Eof;
          }
          arr[num] = Eof;
        }
      }
    }
  }
}

export default {
  isDigit(charCodeAtResult) {
    let tmp = charCodeAtResult >= 48;
    if (tmp) {
      tmp = charCodeAtResult <= 57;
    }
    return tmp;
  },
  isHexDigit(charCodeAtResult) {
    let tmp = charCodeAtResult >= 48;
    if (tmp) {
      tmp = charCodeAtResult <= 57;
    }
    if (!tmp) {
      let tmp2 = charCodeAtResult >= 65;
      if (tmp2) {
        tmp2 = charCodeAtResult <= 70;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let tmp3 = charCodeAtResult >= 97;
      if (tmp3) {
        tmp3 = charCodeAtResult <= 102;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  isUppercaseLetter(charCodeAtResult) {
    let tmp = charCodeAtResult >= 65;
    if (tmp) {
      tmp = charCodeAtResult <= 90;
    }
    return tmp;
  },
  isLowercaseLetter(arg0) {
    let tmp = arg0 >= 97;
    if (tmp) {
      tmp = arg0 <= 122;
    }
    return tmp;
  },
  isLetter(arg0) {
    let tmp = arg0 >= 65;
    if (tmp) {
      tmp = arg0 <= 90;
    }
    if (!tmp) {
      let tmp2 = arg0 >= 97;
      if (tmp2) {
        tmp2 = arg0 <= 122;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  isNonAscii(arg0) {
    return arg0 >= 128;
  },
  isNameStart(arg0) {
    let tmp = arg0 >= 65;
    if (tmp) {
      tmp = arg0 <= 90;
    }
    if (!tmp) {
      let tmp2 = arg0 >= 97;
      if (tmp2) {
        tmp2 = arg0 <= 122;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      tmp = arg0 >= 128;
    }
    if (!tmp) {
      tmp = 95 === arg0;
    }
    return tmp;
  },
  isName(charCodeAtResult) {
    let tmp = charCodeAtResult >= 65;
    if (tmp) {
      tmp = charCodeAtResult <= 90;
    }
    if (!tmp) {
      let tmp2 = charCodeAtResult >= 97;
      if (tmp2) {
        tmp2 = charCodeAtResult <= 122;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      tmp = charCodeAtResult >= 128;
    }
    if (!tmp) {
      tmp = 95 === charCodeAtResult;
    }
    if (!tmp) {
      let tmp3 = charCodeAtResult >= 48;
      if (tmp3) {
        tmp3 = charCodeAtResult <= 57;
      }
      tmp = tmp3;
    }
    if (!tmp) {
      tmp = 45 === charCodeAtResult;
    }
    return tmp;
  },
  isNonPrintable(arg0) {
    let tmp = arg0 >= 0;
    if (tmp) {
      tmp = arg0 <= 8;
    }
    if (!tmp) {
      tmp = 11 === arg0;
    }
    if (!tmp) {
      let tmp2 = arg0 >= 14;
      if (tmp2) {
        tmp2 = arg0 <= 31;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      tmp = 127 === arg0;
    }
    return tmp;
  },
  isNewline(charCodeAtResult) {
    let tmp = 10 === charCodeAtResult;
    if (!tmp) {
      tmp = 13 === charCodeAtResult;
    }
    if (!tmp) {
      tmp = 12 === charCodeAtResult;
    }
    return tmp;
  },
  isWhiteSpace(arg0) {
    let tmp = 10 === arg0;
    if (!tmp) {
      tmp = 13 === arg0;
    }
    if (!tmp) {
      tmp = 12 === arg0;
    }
    if (!tmp) {
      tmp = 32 === arg0;
    }
    if (!tmp) {
      tmp = 9 === arg0;
    }
    return tmp;
  },
  isValidEscape(charCodeAtResult, arg1) {
    let tmp = 92 === charCodeAtResult;
    if (tmp) {
      let tmp3 = 10 === arg1;
      if (!tmp3) {
        tmp3 = 13 === arg1;
      }
      if (!tmp3) {
        tmp3 = 12 === arg1;
      }
      let tmp4 = !tmp3;
      if (!tmp3) {
        tmp4 = 0 !== arg1;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  isIdentifierStart(charCodeAtResult, arg1, arg2) {
    if (45 === charCodeAtResult) {
      let tmp9 = arg1 >= 65;
      if (tmp9) {
        tmp9 = arg1 <= 90;
      }
      if (!tmp9) {
        let tmp10 = arg1 >= 97;
        if (tmp10) {
          tmp10 = arg1 <= 122;
        }
        tmp9 = tmp10;
      }
      if (!tmp9) {
        tmp9 = arg1 >= 128;
      }
      if (!tmp9) {
        tmp9 = 95 === arg1;
      }
      if (!tmp9) {
        tmp9 = 45 === arg1;
      }
      if (!tmp9) {
        let tmp11 = 92 === arg1;
        if (tmp11) {
          let tmp13 = 10 === arg2;
          if (!tmp13) {
            tmp13 = 13 === arg2;
          }
          if (!tmp13) {
            tmp13 = 12 === arg2;
          }
          let tmp14 = !tmp13;
          if (!tmp13) {
            tmp14 = 0 !== arg2;
          }
          tmp11 = tmp14;
        }
        tmp9 = tmp11;
      }
      let tmp3 = tmp9;
    } else {
      let tmp = charCodeAtResult >= 65;
      if (tmp) {
        tmp = charCodeAtResult <= 90;
      }
      if (!tmp) {
        let tmp2 = charCodeAtResult >= 97;
        if (tmp2) {
          tmp2 = charCodeAtResult <= 122;
        }
        tmp = tmp2;
      }
      if (!tmp) {
        tmp = charCodeAtResult >= 128;
      }
      if (!tmp) {
        tmp = 95 === charCodeAtResult;
      }
      tmp3 = tmp;
      if (!tmp3) {
        let tmp5 = tmp4;
        if (92 === charCodeAtResult) {
          let tmp6 = tmp4;
          if (tmp4) {
            let tmp7 = 10 === arg1;
            if (!tmp7) {
              tmp7 = 13 === arg1;
            }
            if (!tmp7) {
              tmp7 = 12 === arg1;
            }
            let tmp8 = !tmp7;
            if (!tmp7) {
              tmp8 = 0 !== arg1;
            }
            tmp6 = tmp8;
          }
          tmp5 = tmp6;
        }
        tmp3 = tmp5;
      }
    }
    return tmp3;
  },
  isNumberStart(charCodeAtResult, arg1, arg2) {
    if (43 !== charCodeAtResult) {
      if (45 !== charCodeAtResult) {
        if (46 === charCodeAtResult) {
          let tmp2 = arg1 >= 48;
          if (tmp2) {
            tmp2 = arg1 <= 57;
          }
          let num8 = 0;
          if (tmp2) {
            num8 = 2;
          }
          let num5 = num8;
        } else {
          let tmp = charCodeAtResult >= 48;
          if (tmp) {
            tmp = charCodeAtResult <= 57;
          }
          num5 = 0;
          if (tmp) {
            num5 = 1;
          }
        }
      }
      return num5;
    }
    let tmp3 = arg1 >= 48;
    if (tmp3) {
      tmp3 = arg1 <= 57;
    }
    let num10 = 2;
    if (!tmp3) {
      let num12 = 0;
      if (46 === arg1) {
        let tmp5 = arg2 >= 48;
        if (tmp5) {
          tmp5 = arg2 <= 57;
        }
        num12 = 0;
        if (tmp5) {
          num12 = 3;
        }
      }
      num10 = num12;
    }
    num5 = num10;
  },
  isBOM(arg0) {
    if (65279 === arg0) {
      let num2 = 1;
    } else {
      num2 = 0;
    }
    return num2;
  },
  charCodeCategory
};