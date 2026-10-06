// === Module 12507: usePreviewableMediaText ===

// Module 12507 (usePreviewableMediaText)
import react2 from "react" /* 576 */;
import intl21 from "intl" /* 1126 */;
import usePreviewableMedia from "usePreviewableMedia" /* 12504 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let author;
  let first1;
  let intl11;
  let intl17;
  let intl19;
  let intl5;
  let intl7;
  let intl9;
  let previewableMedia;
  const obj = react2;
  const cResult = obj.c(55);
  ({ previewableMedia, author } = arg0);
  if (0 !== previewableMedia.length) {
    if (1 === previewableMedia.length) {
      const first = previewableMedia[0];
      const type = first.type;
      if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
        if (null != author) {
          let tmp60;
          let tmp62;
          if (cResult[1] !== author.nick) {
            const intl20 = intl21.intl;
            const obj2 = { username: author.nick };
            const formatToPlainStringResult = intl20.formatToPlainString(intl21.t.pTiyNB, obj2);
            cResult[1] = author.nick;
            cResult[2] = formatToPlainStringResult;
            tmp60 = formatToPlainStringResult;
          } else {
            tmp60 = cResult[2];
          }
          if (cResult[3] !== tmp60) {
            const obj3 = { text: tmp60, secondaryText: null };
            cResult[3] = tmp60;
            cResult[4] = obj3;
            tmp62 = obj3;
          } else {
            tmp62 = cResult[4];
          }
          first1 = tmp62;
        } else {
          let tmp59;
          const _Symbol7 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { text: intl19.string(intl21.t.tCcq5p), secondaryText: null };
            intl19 = intl21.intl;
            cResult[5] = obj4;
            tmp59 = obj4;
          } else {
            tmp59 = cResult[5];
          }
          first1 = tmp59;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
        if (null != author) {
          let tmp54;
          let tmp56;
          if (cResult[6] !== author.nick) {
            const intl18 = intl21.intl;
            const obj5 = { username: author.nick };
            const formatToPlainStringResult1 = intl18.formatToPlainString(intl21.t.zqhHWH, obj5);
            cResult[6] = author.nick;
            cResult[7] = formatToPlainStringResult1;
            tmp54 = formatToPlainStringResult1;
          } else {
            tmp54 = cResult[7];
          }
          if (cResult[8] !== tmp54) {
            const obj6 = { text: tmp54, secondaryText: null };
            cResult[8] = tmp54;
            cResult[9] = obj6;
            tmp56 = obj6;
          } else {
            tmp56 = cResult[9];
          }
          first1 = tmp56;
        } else {
          let tmp53;
          const _Symbol6 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { text: intl17.string(intl21.t.KxO2Yl), secondaryText: null };
            intl17 = intl21.intl;
            cResult[10] = obj7;
            tmp53 = obj7;
          } else {
            tmp53 = cResult[10];
          }
          first1 = tmp53;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
        if (null != author) {
          let tmp48;
          if (cResult[11] !== author.nick) {
            const intl16 = intl21.intl;
            const obj8 = { username: author.nick };
            const formatToPlainStringResult2 = intl16.formatToPlainString(intl21.t.HADQ6n, obj8);
            cResult[11] = author.nick;
            cResult[12] = formatToPlainStringResult2;
            tmp48 = formatToPlainStringResult2;
          } else {
            tmp48 = cResult[12];
          }
          if (cResult[13] === first.media.filename) {
            let tmp50;
            if (cResult[14] === tmp48) {
              tmp50 = cResult[15];
            }
            first1 = tmp50;
          }
          const obj9 = { text: tmp48, secondaryText: first.media.filename };
          cResult[13] = first.media.filename;
          cResult[14] = tmp48;
          cResult[15] = obj9;
          tmp50 = obj9;
        } else {
          let tmp45;
          let tmp47;
          const _Symbol9 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl15 = intl21.intl;
            const stringResult = intl15.string(intl21.t.FWqQt5);
            cResult[16] = stringResult;
            tmp45 = stringResult;
          } else {
            tmp45 = cResult[16];
          }
          if (cResult[17] !== first.media.filename) {
            const obj10 = { text: tmp45, secondaryText: first.media.filename };
            cResult[17] = first.media.filename;
            cResult[18] = obj10;
            tmp47 = obj10;
          } else {
            tmp47 = cResult[18];
          }
          first1 = tmp47;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
        if (null != author) {
          let tmp41;
          if (cResult[19] !== author.nick) {
            const intl14 = intl21.intl;
            const obj11 = { username: author.nick };
            const formatToPlainStringResult3 = intl14.formatToPlainString(intl21.t["ifW/ef"], obj11);
            cResult[19] = author.nick;
            cResult[20] = formatToPlainStringResult3;
            tmp41 = formatToPlainStringResult3;
          } else {
            tmp41 = cResult[20];
          }
          if (cResult[21] === first.media.filename) {
            let tmp43;
            if (cResult[22] === tmp41) {
              tmp43 = cResult[23];
            }
            first1 = tmp43;
          }
          const obj12 = { text: tmp41, secondaryText: first.media.filename };
          cResult[21] = first.media.filename;
          cResult[22] = tmp41;
          cResult[23] = obj12;
          tmp43 = obj12;
        } else {
          let tmp38;
          let tmp40;
          const _Symbol8 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const intl13 = intl21.intl;
            const stringResult1 = intl13.string(intl21.t.mX8M6i);
            cResult[24] = stringResult1;
            tmp38 = stringResult1;
          } else {
            tmp38 = cResult[24];
          }
          if (cResult[25] !== first.media.filename) {
            const obj13 = { text: tmp38, secondaryText: first.media.filename };
            cResult[25] = first.media.filename;
            cResult[26] = obj13;
            tmp40 = obj13;
          } else {
            tmp40 = cResult[26];
          }
          first1 = tmp40;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
        if (null != author) {
          let tmp34;
          let tmp36;
          if (cResult[27] !== author.nick) {
            const intl12 = intl21.intl;
            const obj14 = { username: author.nick };
            const formatToPlainStringResult4 = intl12.formatToPlainString(intl21.t["3iI/fs"], obj14);
            cResult[27] = author.nick;
            cResult[28] = formatToPlainStringResult4;
            tmp34 = formatToPlainStringResult4;
          } else {
            tmp34 = cResult[28];
          }
          if (cResult[29] !== tmp34) {
            const obj15 = { text: tmp34, secondaryText: null };
            cResult[29] = tmp34;
            cResult[30] = obj15;
            tmp36 = obj15;
          } else {
            tmp36 = cResult[30];
          }
          first1 = tmp36;
        } else {
          let tmp33;
          const _Symbol5 = Symbol;
          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
            const obj16 = { text: intl11.string(intl21.t.dyquw8), secondaryText: null };
            intl11 = intl21.intl;
            cResult[31] = obj16;
            tmp33 = obj16;
          } else {
            tmp33 = cResult[31];
          }
          first1 = tmp33;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        if (null != author) {
          let tmp28;
          let tmp30;
          if (cResult[32] !== author.nick) {
            const intl10 = intl21.intl;
            const obj17 = { username: author.nick };
            const formatToPlainStringResult5 = intl10.formatToPlainString(intl21.t.Y7wlOj, obj17);
            cResult[32] = author.nick;
            cResult[33] = formatToPlainStringResult5;
            tmp28 = formatToPlainStringResult5;
          } else {
            tmp28 = cResult[33];
          }
          if (cResult[34] !== tmp28) {
            const obj18 = { text: tmp28, secondaryText: null };
            cResult[34] = tmp28;
            cResult[35] = obj18;
            tmp30 = obj18;
          } else {
            tmp30 = cResult[35];
          }
          first1 = tmp30;
        } else {
          let tmp27;
          const _Symbol4 = Symbol;
          if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
            const obj19 = { text: intl9.string(intl21.t.slFYgi), secondaryText: null };
            intl9 = intl21.intl;
            cResult[36] = obj19;
            tmp27 = obj19;
          } else {
            tmp27 = cResult[36];
          }
          first1 = tmp27;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
        if (null != author) {
          let tmp22;
          let tmp24;
          if (cResult[37] !== author.nick) {
            const intl8 = intl21.intl;
            const obj20 = { username: author.nick };
            const formatToPlainStringResult6 = intl8.formatToPlainString(intl21.t.mikhon, obj20);
            cResult[37] = author.nick;
            cResult[38] = formatToPlainStringResult6;
            tmp22 = formatToPlainStringResult6;
          } else {
            tmp22 = cResult[38];
          }
          if (cResult[39] !== tmp22) {
            const obj21 = { text: tmp22, secondaryText: null };
            cResult[39] = tmp22;
            cResult[40] = obj21;
            tmp24 = obj21;
          } else {
            tmp24 = cResult[40];
          }
          first1 = tmp24;
        } else {
          let tmp21;
          const _Symbol3 = Symbol;
          if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
            const obj22 = { text: intl7.string(intl21.t.p0oZmy), secondaryText: null };
            intl7 = intl21.intl;
            cResult[41] = obj22;
            tmp21 = obj22;
          } else {
            tmp21 = cResult[41];
          }
          first1 = tmp21;
        }
      } else if (null != author) {
        let tmp16;
        let tmp18;
        if (cResult[42] !== author.nick) {
          const intl6 = intl21.intl;
          const obj23 = { username: author.nick };
          const formatToPlainStringResult7 = intl6.formatToPlainString(intl21.t["7FJeVi"], obj23);
          cResult[42] = author.nick;
          cResult[43] = formatToPlainStringResult7;
          tmp16 = formatToPlainStringResult7;
        } else {
          tmp16 = cResult[43];
        }
        if (cResult[44] !== tmp16) {
          const obj24 = { text: tmp16, secondaryText: null };
          cResult[44] = tmp16;
          cResult[45] = obj24;
          tmp18 = obj24;
        } else {
          tmp18 = cResult[45];
        }
        first1 = tmp18;
      } else {
        let tmp15;
        const _Symbol2 = Symbol;
        if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
          const obj25 = { text: intl5.string(intl21.t.sDqZHL), secondaryText: null };
          intl5 = intl21.intl;
          cResult[46] = obj25;
          tmp15 = obj25;
        } else {
          tmp15 = cResult[46];
        }
        first1 = tmp15;
      }
    } else {
      let formatResult1;
      if (cResult[47] === author) {
        let tmp6;
        let formatResult;
        if (cResult[48] === previewableMedia.length) {
          tmp6 = cResult[49];
        }
        if (cResult[50] === author) {
          let tmp9;
          let tmp12;
          if (cResult[51] === previewableMedia.length) {
            tmp9 = cResult[52];
          }
          if (tmp63) {
            tmp9 = tmp6;
          }
          if (cResult[53] !== tmp9) {
            const obj26 = { text: tmp9, secondaryText: null };
            cResult[53] = tmp9;
            cResult[54] = obj26;
            tmp12 = obj26;
          } else {
            tmp12 = cResult[54];
          }
          first1 = tmp12;
        }
        if (null != author) {
          const intl4 = intl21.intl;
          const obj27 = { count: previewableMedia.length, username: author.nick };
          formatResult = intl4.format(intl21.t["1OSGGk"], obj27);
        } else {
          const intl3 = intl21.intl;
          const obj28 = { count: previewableMedia.length };
          formatResult = intl3.formatToPlainString(intl21.t["8/qgDd"], obj28);
        }
        cResult[50] = author;
        cResult[51] = previewableMedia.length;
        cResult[52] = formatResult;
        tmp9 = formatResult;
      }
      if (null != author) {
        const intl2 = intl21.intl;
        const obj29 = { count: previewableMedia.length, username: author.nick };
        formatResult1 = intl2.format(intl21.t["319zWs"], obj29);
      } else {
        const intl = intl21.intl;
        const obj30 = { count: previewableMedia.length };
        formatResult1 = intl.formatToPlainString(intl21.t.y0gZht, obj30);
      }
      cResult[47] = author;
      cResult[48] = previewableMedia.length;
      cResult[49] = formatResult1;
      tmp6 = formatResult1;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj31 = { text: null, secondaryText: null };
      cResult[0] = obj31;
      first1 = obj31;
    } else {
      first1 = cResult[0];
    }
  }
  return first1;
}) : ((previewableMedia) => {
  previewableMedia = previewableMedia.previewableMedia;
  const author = previewableMedia.author;
  const items = [author, previewableMedia];
  return react.useMemo(() => {
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl15;
    let intl16;
    let intl17;
    let intl18;
    let intl19;
    let intl20;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let obj12;
    let obj15;
    let obj18;
    let obj21;
    let obj24;
    let obj3;
    let obj6;
    let obj9;
    if (0 === previewableMedia.length) {
      return { text: null, secondaryText: null };
    } else if (1 === previewableMedia.length) {
      const first = previewableMedia[0];
      const type = first.type;
      if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
        let obj4;
        if (null != author) {
          const obj2 = { text: intl20.formatToPlainString(intl21.t.pTiyNB, obj3), secondaryText: null };
          intl20 = intl21.intl;
          obj4 = obj2;
          obj3 = { username: tmp90.nick };
        } else {
          obj4 = { text: intl19.string(intl21.t.tCcq5p), secondaryText: null };
          intl19 = intl21.intl;
        }
        return obj4;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
        let obj7;
        if (null != author) {
          const obj5 = { text: intl18.formatToPlainString(intl21.t.zqhHWH, obj6), secondaryText: null };
          intl18 = intl21.intl;
          obj7 = obj5;
          obj6 = { username: tmp80.nick };
        } else {
          obj7 = { text: intl17.string(intl21.t.KxO2Yl), secondaryText: null };
          intl17 = intl21.intl;
        }
        return obj7;
      } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
        let obj10;
        if (null != author) {
          const obj8 = { text: intl16.formatToPlainString(intl21.t.HADQ6n, obj9), secondaryText: first.media.filename };
          intl16 = intl21.intl;
          obj10 = obj8;
          obj9 = { username: tmp70.nick };
        } else {
          obj10 = { text: intl15.string(intl21.t.FWqQt5), secondaryText: first.media.filename };
          intl15 = intl21.intl;
        }
        return obj10;
      } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
        let obj13;
        if (null != author) {
          const obj11 = { text: intl14.formatToPlainString(intl21.t["ifW/ef"], obj12), secondaryText: first.media.filename };
          intl14 = intl21.intl;
          obj13 = obj11;
          obj12 = { username: tmp60.nick };
        } else {
          obj13 = { text: intl13.string(intl21.t.mX8M6i), secondaryText: first.media.filename };
          intl13 = intl21.intl;
        }
        return obj13;
      } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
        let obj16;
        if (null != author) {
          const obj14 = { text: intl12.formatToPlainString(intl21.t["3iI/fs"], obj15), secondaryText: null };
          intl12 = intl21.intl;
          obj16 = obj14;
          obj15 = { username: tmp50.nick };
        } else {
          obj16 = { text: intl11.string(intl21.t.dyquw8), secondaryText: null };
          intl11 = intl21.intl;
        }
        return obj16;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        let obj19;
        if (null != author) {
          const obj17 = { text: intl10.formatToPlainString(intl21.t.Y7wlOj, obj18), secondaryText: null };
          intl10 = intl21.intl;
          obj19 = obj17;
          obj18 = { username: tmp40.nick };
        } else {
          obj19 = { text: intl9.string(intl21.t.slFYgi), secondaryText: null };
          intl9 = intl21.intl;
        }
        return obj19;
      } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
        let obj22;
        if (null != author) {
          const obj20 = { text: intl8.formatToPlainString(intl21.t.mikhon, obj21), secondaryText: null };
          intl8 = intl21.intl;
          obj22 = obj20;
          obj21 = { username: tmp30.nick };
        } else {
          obj22 = { text: intl7.string(intl21.t.p0oZmy), secondaryText: null };
          intl7 = intl21.intl;
        }
        return obj22;
      } else {
        let obj25;
        if (null != author) {
          const obj23 = { text: intl6.formatToPlainString(intl21.t["7FJeVi"], obj24), secondaryText: null };
          intl6 = intl21.intl;
          obj25 = obj23;
          obj24 = { username: tmp115.nick };
        } else {
          obj25 = { text: intl5.string(intl21.t.sDqZHL), secondaryText: null };
          intl5 = intl21.intl;
        }
        return obj25;
      }
    } else {
      let formatResult;
      let formatResult1;
      const everyResult = previewableMedia.every((type) => type.type === previewableMedia(author[3]).PreviewableMediaTypes.FILE);
      if (null != author) {
        const intl2 = intl21.intl;
        const obj26 = { count: previewableMedia.length, username: author.nick };
        formatResult = intl2.format(intl21.t["319zWs"], obj26);
      } else {
        const intl = intl21.intl;
        const obj = { count: previewableMedia.length };
        formatResult = intl.formatToPlainString(intl21.t.y0gZht, obj);
      }
      if (null != author) {
        const intl4 = intl21.intl;
        const obj27 = { count: previewableMedia.length, username: author.nick };
        formatResult1 = intl4.format(intl21.t["1OSGGk"], obj27);
      } else {
        const intl3 = intl21.intl;
        const obj28 = { count: previewableMedia.length };
        formatResult1 = intl3.formatToPlainString(intl21.t["8/qgDd"], obj28);
      }
      if (everyResult) {
        formatResult1 = formatResult;
      }
      return { text: formatResult1, secondaryText: null };
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx");

export const usePreviewableMediaText = tmp2;