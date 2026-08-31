// === Module 5157: getCreationDate ===

// Module 5157 (getCreationDate)
import getStringValue from "getStringValue" /* 5150 */;

require = arg1;
const dependencyMap = arg6;
function getCreationDate(value) {
  const stringValue = getStringValue.getStringValue(value);
  let text2 = stringValue;
  if (stringValue.length >= 8) {
    const text = `${arr.substr(0, 4)}-`;
    const text1 = `${arr.substr(0, 4)}-${arr.substr(4, 2)}`;
    text2 = `${`${arr.substr(0, 4)}-${arr.substr(4, 2)}`}-${arr.substr(6, 2)}`;
  }
  return text2;
}
function getCreationTime(value) {
  const stringValue = getStringValue.getStringValue(value);
  let tmp = stringValue;
  if (stringValue.length >= 6) {
    const text = `${arr.substr(0, 2)}:`;
    const text1 = `${arr.substr(0, 2)}:${arr.substr(2, 2)}`;
    const text2 = `${`${arr.substr(0, 2)}:${arr.substr(2, 2)}`}:${arr.substr(4, 2)}`;
    let text3 = text2;
    if (11 === stringValue.length) {
      const substr = stringValue.substr(6, 1);
      const sum = substr + stringValue.substr(7, 2);
      text3 = `${tmp7}${tmp3}:${arr.substr(9, 2)}`;
    }
    tmp = text3;
  }
  return tmp;
}
function getEncodingName(value) {
  const stringValue = getStringValue.getStringValue(value);
  let str = "UTF-8";
  if ("\u001B%G" !== stringValue) {
    let str19 = "Windows-1252";
    if ("\u001B%5" !== stringValue) {
      let str18 = "UTF-8 Level 1";
      if ("\u001B%/G" !== stringValue) {
        let str17 = "UTF-8 Level 2";
        if ("\u001B%/H" !== stringValue) {
          let str16 = "UTF-8 Level 3";
          if ("\u001B%/I" !== stringValue) {
            let str15 = "ISO-8859-1";
            if ("\u001B/A" !== stringValue) {
              let str14 = "ISO-8859-2";
              if ("\u001B/B" !== stringValue) {
                let str2 = "ISO-8859-3";
                if ("\u001B/C" !== stringValue) {
                  let str4 = "ISO-8859-4";
                  if ("\u001B/D" !== stringValue) {
                    let str6 = "ISO-8859-5";
                    if ("\u001B/@" !== stringValue) {
                      let str8 = "ISO-8859-6";
                      if ("\u001B/G" !== stringValue) {
                        let str10 = "ISO-8859-7";
                        if ("\u001B/F" !== stringValue) {
                          let str12 = "Unknown";
                          if ("\u001B/H" === stringValue) {
                            str12 = "ISO-8859-8";
                          }
                          str10 = str12;
                        }
                        str8 = str10;
                      }
                      str6 = str8;
                    }
                    str4 = str6;
                  }
                  str2 = str4;
                }
                str14 = str2;
              }
              str15 = str14;
            }
            str16 = str15;
          }
          str17 = str16;
        }
        str18 = str17;
      }
      str19 = str18;
    }
    str = str19;
  }
  return str;
}
let obj = { 256: null, 261: null, 276: null, 278: null, 286: "Service Identifier", 296: "Envelope Number", 306: "Product ID", 316: "Envelope Priority", 326: null, 336: null, 346: null, 356: "UNO", 376: null, 378: null, 512: null, 515: "Object Type Reference", 516: "Object Attribute Reference", 517: "Object Name", 519: "Edit Status", 520: null, 522: "Urgency", 524: null, 527: "Category", 532: null, 534: "Fixture Identifier", 537: null, 538: null, 539: null, 542: "Release Date", 547: "Release Time", 549: "Expiration Date", 550: "Expiration Time", 552: "Special Instructions", 554: null, 557: null, 559: null, 562: null, 567: null, 572: null, 574: null, 575: null, 577: "Originating Program", 582: "Program Version", 587: null, 592: null, 597: null, 602: "City", 604: "Sub-location", 607: "Province/State", 612: "Country/Primary Location Code", 613: "Country/Primary Location Name", 615: "Original Transmission Reference", 617: "Headline", 622: "Credit", 627: "Source", 628: "Copyright Notice", 630: null, 632: "Caption/Abstract", 634: null, 637: null, 642: "Image Type", 643: null, 647: "Language Identifier", 662: null, 663: null, 664: null, 665: null, 666: "Audio Outcue", 698: "Short Document ID", 699: "Unique Document ID", 700: "Owner ID", 712: null, 713: null, 714: "ObjectData Preview Data", 1802: null, 1812: null, 1882: null, 1887: null };
obj = {
  name: "Model Version",
  description(arg0) {
    return (arg0[0] << 8) + arg0[1].toString();
  }
};
obj[256] = obj;
obj[261] = { name: "Destination", repeatable: true };
obj[276] = {
  name: "File Format",
  description(arg0) {
    return (arg0[0] << 8) + arg0[1].toString();
  }
};
obj[278] = {
  name: "File Format Version",
  description(arg0) {
    return (arg0[0] << 8) + arg0[1].toString();
  }
};
obj[326] = { name: "Date Sent", description: getCreationDate };
obj[336] = { name: "Time Sent", description: getCreationTime };
obj[346] = { name: "Coded Character Set", description: getEncodingName, encoding_name: getEncodingName };
obj[376] = {
  name: "ARM Identifier",
  description(arg0) {
    return (arg0[0] << 8) + arg0[1].toString();
  }
};
obj[378] = {
  name: "ARM Version",
  description(arg0) {
    return (arg0[0] << 8) + arg0[1].toString();
  }
};
obj[512] = {
  name: "Record Version",
  description(arg0) {
    return (arg0[0] << 8) + arg0[1].toString();
  }
};
obj[520] = {
  name: "Editorial Update",
  description(value) {
    let str = "Unknown";
    if ("01" === obj.getStringValue(value)) {
      str = "Additional Language";
    }
    return str;
  }
};
obj[524] = {
  name: "Subject Reference",
  repeatable: true,
  description(value) {
    const obj = getStringValue;
    const parts = getStringValue.getStringValue(value).split(":");
    let str2 = "";
    let str3 = "";
    if (parts[3]) {
      str3 = `/${tmp[3]}`;
    }
    const sum = parts[2] + str3;
    if (parts[4]) {
      str2 = `/${tmp[4]}`;
    }
    return sum + str2;
  }
};
obj[532] = { name: "Supplemental Category", repeatable: true };
obj[537] = { name: "Keywords", repeatable: true };
obj[538] = { name: "Content Location Code", repeatable: true };
obj[539] = { name: "Content Location Name", repeatable: true };
obj[554] = {
  name: "Action Advised",
  description(value) {
    const stringValue = getStringValue.getStringValue(value);
    let str = "Object Kill";
    if ("01" !== stringValue) {
      let str2 = "Object Replace";
      if ("02" !== stringValue) {
        let str4 = "Object Append";
        if ("03" !== stringValue) {
          let str6 = "Unknown";
          if ("04" === stringValue) {
            str6 = "Object Reference";
          }
          str4 = str6;
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
obj[557] = { name: "Reference Service", repeatable: true };
obj[559] = { name: "Reference Date", repeatable: true };
obj[562] = { name: "Reference Number", repeatable: true };
obj[567] = { name: "Date Created", description: getCreationDate };
obj[572] = { name: "Time Created", description: getCreationTime };
obj[574] = { name: "Digital Creation Date", description: getCreationDate };
obj[575] = { name: "Digital Creation Time", description: getCreationTime };
obj[587] = {
  name: "Object Cycle",
  description(value) {
    const stringValue = getStringValue.getStringValue(value);
    let str = "morning";
    if ("a" !== stringValue) {
      let str2 = "evening";
      if ("p" !== stringValue) {
        let str4 = "Unknown";
        if ("b" === stringValue) {
          str4 = "both";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
obj[592] = { name: "By-line", repeatable: true };
obj[597] = { name: "By-line Title", repeatable: true };
obj[630] = { name: "Contact", repeatable: true };
obj[634] = { name: "Writer/Editor", repeatable: true };
obj[637] = {
  name: "Rasterized Caption",
  description(arg0) {
    return arg0;
  }
};
obj[643] = {
  name: "Image Orientation",
  description(value) {
    const stringValue = getStringValue.getStringValue(value);
    let str = "Portrait";
    if ("P" !== stringValue) {
      let str2 = "Landscape";
      if ("L" !== stringValue) {
        let str4 = "Unknown";
        if ("S" === stringValue) {
          str4 = "Square";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
obj[662] = {
  name: "Audio Type",
  description(value) {
    let str = getStringValue.getStringValue(value);
    const charAtResult = str.charAt(0);
    const charAtResult1 = str.charAt(1);
    let str2 = "Mono";
    if ("1" !== charAtResult) {
      str2 = "";
      if ("2" === charAtResult) {
        str2 = "Stereo";
      }
    }
    if ("A" === charAtResult1) {
      let text = `${str2}, actuality`;
    } else if ("C" === charAtResult1) {
      text = `${str2}, question and answer session`;
    } else if ("M" === charAtResult1) {
      text = `${str2}, music, transmitted by itself`;
    } else if ("Q" === charAtResult1) {
      text = `${str2}, response to a question`;
    } else if ("R" === charAtResult1) {
      text = `${str2}, raw sound`;
    } else if ("S" === charAtResult1) {
      text = `${str2}, scener`;
    } else if ("V" === charAtResult1) {
      text = `${str2}, voicer`;
    } else {
      text = str2;
      if ("W" === charAtResult1) {
        text = `${str2}, wrap`;
      }
    }
    if ("" !== text) {
      str = text;
    }
    return str;
  }
};
obj[663] = {
  name: "Audio Sampling Rate",
  description(value) {
    return parseInt(getStringValue.getStringValue(value), 10) + " Hz";
  }
};
obj[664] = {
  name: "Audio Sampling Resolution",
  description(value) {
    const parsed = parseInt(getStringValue.getStringValue(value), 10);
    let str = " bits";
    if (1 === parsed) {
      str = " bit";
    }
    return parsed + str;
  }
};
obj[665] = {
  name: "Audio Duration",
  description(value) {
    const stringValue = getStringValue.getStringValue(value);
    let text2 = stringValue;
    if (stringValue.length >= 6) {
      const text = `${arr.substr(0, 2)}:`;
      const text1 = `${arr.substr(0, 2)}:${arr.substr(2, 2)}`;
      text2 = `${`${arr.substr(0, 2)}:${arr.substr(2, 2)}`}:${arr.substr(4, 2)}`;
    }
    return text2;
  }
};
obj[712] = {
  name(arg0) {
    let str = "Record 2 destination";
    if (2 === arg0.length) {
      str = "ObjectData Preview File Format";
    }
    return str;
  },
  description(value) {
    if (2 === value.length) {
      const sum = (value[0] << 8) + value[1];
      let str = "No ObjectData";
      if (0 !== sum) {
        let str31 = "IPTC-NAA Digital Newsphoto Parameter Record";
        if (1 !== sum) {
          let str30 = "IPTC7901 Recommended Message Format";
          if (2 !== sum) {
            let str29 = "Tagged Image File Format (Adobe/Aldus Image data)";
            if (3 !== sum) {
              let str28 = "Illustrator (Adobe Graphics data)";
              if (4 !== sum) {
                let str27 = "AppleSingle (Apple Computer Inc)";
                if (5 !== sum) {
                  let str26 = "NAA 89-3 (ANPA 1312)";
                  if (6 !== sum) {
                    let str25 = "MacBinary II";
                    if (7 !== sum) {
                      let str24 = "IPTC Unstructured Character Oriented File Format (UCOFF)";
                      if (8 !== sum) {
                        let str23 = "United Press International ANPA 1312 variant";
                        if (9 !== sum) {
                          let str22 = "United Press International Down-Load Message";
                          if (10 !== sum) {
                            let str21 = "JPEG File Interchange (JFIF)";
                            if (11 !== sum) {
                              let str20 = "Photo-CD Image-Pac (Eastman Kodak)";
                              if (12 !== sum) {
                                let str19 = "Microsoft Bit Mapped Graphics File [*.BMP]";
                                if (13 !== sum) {
                                  let str18 = "Digital Audio File [*.WAV] (Microsoft & Creative Labs)";
                                  if (14 !== sum) {
                                    let str17 = "Audio plus Moving Video [*.AVI] (Microsoft)";
                                    if (15 !== sum) {
                                      let str16 = "PC DOS/Windows Executable Files [*.COM][*.EXE]";
                                      if (16 !== sum) {
                                        let str15 = "Compressed Binary File [*.ZIP] (PKWare Inc)";
                                        if (17 !== sum) {
                                          let str14 = "Audio Interchange File Format AIFF (Apple Computer Inc)";
                                          if (18 !== sum) {
                                            let str13 = "RIFF Wave (Microsoft Corporation)";
                                            if (19 !== sum) {
                                              let str12 = "Freehand (Macromedia/Aldus)";
                                              if (20 !== sum) {
                                                let str11 = "Hypertext Markup Language \"HTML\" (The Internet Society)";
                                                if (21 !== sum) {
                                                  let str10 = "MPEG 2 Audio Layer 2 (Musicom), ISO/IEC";
                                                  if (22 !== sum) {
                                                    let str9 = "MPEG 2 Audio Layer 3, ISO/IEC";
                                                    if (23 !== sum) {
                                                      let str2 = "Portable Document File (*.PDF) Adobe";
                                                      if (24 !== sum) {
                                                        let str3 = "News Industry Text Format (NITF)";
                                                        if (25 !== sum) {
                                                          let str4 = "Tape Archive (*.TAR)";
                                                          if (26 !== sum) {
                                                            let str5 = "Tidningarnas Telegrambyr\u00E5 NITF version (TTNITF DTD)";
                                                            if (27 !== sum) {
                                                              let str6 = "Ritzaus Bureau NITF version (RBNITF DTD)";
                                                              if (28 !== sum) {
                                                                let str7 = "Corel Draw [*.CDR]";
                                                                if (29 !== sum) {
                                                                  const _HermesInternal = HermesInternal;
                                                                  str7 = "Unknown format " + sum;
                                                                }
                                                                str6 = str7;
                                                              }
                                                              str5 = str6;
                                                            }
                                                            str4 = str5;
                                                          }
                                                          str3 = str4;
                                                        }
                                                        str2 = str3;
                                                      }
                                                      str9 = str2;
                                                    }
                                                    str10 = str9;
                                                  }
                                                  str11 = str10;
                                                }
                                                str12 = str11;
                                              }
                                              str13 = str12;
                                            }
                                            str14 = str13;
                                          }
                                          str15 = str14;
                                        }
                                        str16 = str15;
                                      }
                                      str17 = str16;
                                    }
                                    str18 = str17;
                                  }
                                  str19 = str18;
                                }
                                str20 = str19;
                              }
                              str21 = str20;
                            }
                            str22 = str21;
                          }
                          str23 = str22;
                        }
                        str24 = str23;
                      }
                      str25 = str24;
                    }
                    str26 = str25;
                  }
                  str27 = str26;
                }
                str28 = str27;
              }
              str29 = str28;
            }
            str30 = str29;
          }
          str31 = str30;
        }
        str = str31;
      }
      return str;
    } else {
      return getStringValue.getStringValue(value);
    }
  }
};
obj[713] = {
  name: "ObjectData Preview File Format Version",
  description(value, ObjectData_Preview_File_Format) {
    const obj = { "00": { "00": "1" }, "01": { "01": "1", "02": "2", "03": "3", "04": "4" }, "02": { "04": "4" }, "03": { "01": "5.0", "02": "6.0" }, "04": { "01": "1.40" }, "05": { "01": "2" }, "06": { "01": "1" }, 11: null, 20: null, 21: null };
    obj[11] = { "01": "1.02" };
    obj[20] = { "01": "3.1", "02": "4.0", "03": "5.0", "04": "5.5" };
    obj[21] = { "02": "2.0" };
    const stringValue = getStringValue.getStringValue(value);
    if (ObjectData_Preview_File_Format["ObjectData Preview File Format"]) {
      const stringValue1 = getStringValue.getStringValue(ObjectData_Preview_File_Format["ObjectData Preview File Format"].value);
      if (obj[stringValue1]) {
        if (obj[stringValue1][stringValue]) {
          return obj[stringValue1][stringValue];
        }
      }
      const tmpResult = getStringValue;
    }
    return stringValue;
  }
};
obj[1802] = {
  name: "Size Mode",
  description(arg0) {
    return arg0[0].toString();
  }
};
obj[1812] = {
  name: "Max Subfile Size",
  description(arg0) {
    let length;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < arg0.length) {
      do {
        num2 = (num2 << 8) + arg0[num];
        num = num + 1;
        num3 = num2;
        length = arg0.length;
      } while (num < length);
    }
    return num3.toString();
  }
};
obj[1882] = {
  name: "ObjectData Size Announced",
  description(arg0) {
    let length;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < arg0.length) {
      do {
        num2 = (num2 << 8) + arg0[num];
        num = num + 1;
        num3 = num2;
        length = arg0.length;
      } while (num < length);
    }
    return num3.toString();
  }
};
obj[1887] = {
  name: "Maximum ObjectData Size",
  description(arg0) {
    let length;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < arg0.length) {
      do {
        num2 = (num2 << 8) + arg0[num];
        num = num + 1;
        num3 = num2;
        length = arg0.length;
      } while (num < length);
    }
    return num3.toString();
  }
};
arg5.default = { iptc: obj };