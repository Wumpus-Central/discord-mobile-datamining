// === Module 12507: usePreviewableMediaText ===

// Module 12507 (usePreviewableMediaText)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import usePreviewableMedia from "usePreviewableMedia" /* 12504 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx");

export const usePreviewableMediaText = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(55);
  ({ previewableMedia, author } = arg0);
  if (0 !== previewableMedia.length) {
    if (1 === previewableMedia.length) {
      const first = previewableMedia[0];
      const type = first.type;
      if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
        if (null != author) {
          if (cResult[1] !== author.nick) {
            const intl20 = util.intl;
            const obj2 = { username: author.nick };
            const formatToPlainStringResult = intl20.formatToPlainString(util.t.pTiyNB, obj2);
            cResult[1] = author.nick;
            cResult[2] = formatToPlainStringResult;
            let tmp62 = formatToPlainStringResult;
          } else {
            tmp62 = cResult[2];
          }
          if (cResult[3] !== tmp62) {
            const obj3 = { text: tmp62, secondaryText: null };
            cResult[3] = tmp62;
            cResult[4] = obj3;
          }
        } else {
          const _Symbol7 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { text: null, secondaryText: null };
            const intl19 = util.intl;
            obj4.text = intl19.string(util.t.tCcq5p);
            cResult[5] = obj4;
            let tmp61 = obj4;
          } else {
            tmp61 = cResult[5];
          }
          let first1 = tmp61;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
        if (null != author) {
          if (cResult[6] !== author.nick) {
            const intl18 = util.intl;
            const obj5 = { username: author.nick };
            const formatToPlainStringResult1 = intl18.formatToPlainString(util.t.zqhHWH, obj5);
            cResult[6] = author.nick;
            cResult[7] = formatToPlainStringResult1;
            let tmp56 = formatToPlainStringResult1;
          } else {
            tmp56 = cResult[7];
          }
          if (cResult[8] !== tmp56) {
            const obj6 = { text: tmp56, secondaryText: null };
            cResult[8] = tmp56;
            cResult[9] = obj6;
            let tmp58 = obj6;
          } else {
            tmp58 = cResult[9];
          }
          first1 = tmp58;
        } else {
          const _Symbol6 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { text: null, secondaryText: null };
            const intl17 = util.intl;
            obj7.text = intl17.string(util.t.KxO2Yl);
            cResult[10] = obj7;
            let tmp55 = obj7;
          } else {
            tmp55 = cResult[10];
          }
          first1 = tmp55;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
        if (null != author) {
          if (cResult[11] !== author.nick) {
            const intl16 = util.intl;
            const obj8 = { username: author.nick };
            const formatToPlainStringResult2 = intl16.formatToPlainString(util.t.HADQ6n, obj8);
            cResult[11] = author.nick;
            cResult[12] = formatToPlainStringResult2;
            let tmp50 = formatToPlainStringResult2;
          } else {
            tmp50 = cResult[12];
          }
          if (cResult[13] === first.media.filename) {
            if (cResult[14] === tmp50) {
              let tmp52 = cResult[15];
            }
            first1 = tmp52;
          }
          const obj9 = { text: tmp50, secondaryText: first.media.filename };
          cResult[13] = first.media.filename;
          cResult[14] = tmp50;
          cResult[15] = obj9;
          tmp52 = obj9;
        } else {
          const _Symbol9 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl15 = util.intl;
            const stringResult = intl15.string(util.t.FWqQt5);
            cResult[16] = stringResult;
            let tmp47 = stringResult;
          } else {
            tmp47 = cResult[16];
          }
          if (cResult[17] !== first.media.filename) {
            const obj10 = { text: tmp47, secondaryText: first.media.filename };
            cResult[17] = first.media.filename;
            cResult[18] = obj10;
            let tmp49 = obj10;
          } else {
            tmp49 = cResult[18];
          }
          first1 = tmp49;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
        if (null != author) {
          if (cResult[19] !== author.nick) {
            const intl14 = util.intl;
            const obj11 = { username: author.nick };
            const formatToPlainStringResult3 = intl14.formatToPlainString(util.t["ifW/ef"], obj11);
            cResult[19] = author.nick;
            cResult[20] = formatToPlainStringResult3;
            let tmp43 = formatToPlainStringResult3;
          } else {
            tmp43 = cResult[20];
          }
          if (cResult[21] === first.media.filename) {
            if (cResult[22] === tmp43) {
              let tmp45 = cResult[23];
            }
            first1 = tmp45;
          }
          const obj12 = { text: tmp43, secondaryText: first.media.filename };
          cResult[21] = first.media.filename;
          cResult[22] = tmp43;
          cResult[23] = obj12;
          tmp45 = obj12;
        } else {
          const _Symbol8 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const intl13 = util.intl;
            const stringResult1 = intl13.string(util.t.mX8M6i);
            cResult[24] = stringResult1;
            let tmp40 = stringResult1;
          } else {
            tmp40 = cResult[24];
          }
          if (cResult[25] !== first.media.filename) {
            const obj13 = { text: tmp40, secondaryText: first.media.filename };
            cResult[25] = first.media.filename;
            cResult[26] = obj13;
            let tmp42 = obj13;
          } else {
            tmp42 = cResult[26];
          }
          first1 = tmp42;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
        if (null != author) {
          if (cResult[27] !== author.nick) {
            const intl12 = util.intl;
            const obj14 = { username: author.nick };
            const formatToPlainStringResult4 = intl12.formatToPlainString(util.t["3iI/fs"], obj14);
            cResult[27] = author.nick;
            cResult[28] = formatToPlainStringResult4;
            let tmp36 = formatToPlainStringResult4;
          } else {
            tmp36 = cResult[28];
          }
          if (cResult[29] !== tmp36) {
            const obj15 = { text: tmp36, secondaryText: null };
            cResult[29] = tmp36;
            cResult[30] = obj15;
            let tmp38 = obj15;
          } else {
            tmp38 = cResult[30];
          }
          first1 = tmp38;
        } else {
          const _Symbol5 = Symbol;
          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
            const obj16 = { text: null, secondaryText: null };
            const intl11 = util.intl;
            obj16.text = intl11.string(util.t.dyquw8);
            cResult[31] = obj16;
            let tmp35 = obj16;
          } else {
            tmp35 = cResult[31];
          }
          first1 = tmp35;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        if (null != author) {
          if (cResult[32] !== author.nick) {
            const intl10 = util.intl;
            const obj17 = { username: author.nick };
            const formatToPlainStringResult5 = intl10.formatToPlainString(util.t.Y7wlOj, obj17);
            cResult[32] = author.nick;
            cResult[33] = formatToPlainStringResult5;
            let tmp30 = formatToPlainStringResult5;
          } else {
            tmp30 = cResult[33];
          }
          if (cResult[34] !== tmp30) {
            const obj18 = { text: tmp30, secondaryText: null };
            cResult[34] = tmp30;
            cResult[35] = obj18;
            let tmp32 = obj18;
          } else {
            tmp32 = cResult[35];
          }
          first1 = tmp32;
        } else {
          const _Symbol4 = Symbol;
          if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
            const obj19 = { text: null, secondaryText: null };
            const intl9 = util.intl;
            obj19.text = intl9.string(util.t.slFYgi);
            cResult[36] = obj19;
            let tmp29 = obj19;
          } else {
            tmp29 = cResult[36];
          }
          first1 = tmp29;
        }
      } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
        if (null != author) {
          if (cResult[37] !== author.nick) {
            const intl8 = util.intl;
            const obj20 = { username: author.nick };
            const formatToPlainStringResult6 = intl8.formatToPlainString(util.t.mikhon, obj20);
            cResult[37] = author.nick;
            cResult[38] = formatToPlainStringResult6;
            let tmp24 = formatToPlainStringResult6;
          } else {
            tmp24 = cResult[38];
          }
          if (cResult[39] !== tmp24) {
            const obj21 = { text: tmp24, secondaryText: null };
            cResult[39] = tmp24;
            cResult[40] = obj21;
            let tmp26 = obj21;
          } else {
            tmp26 = cResult[40];
          }
          first1 = tmp26;
        } else {
          const _Symbol3 = Symbol;
          if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
            const obj22 = { text: null, secondaryText: null };
            const intl7 = util.intl;
            obj22.text = intl7.string(util.t.p0oZmy);
            cResult[41] = obj22;
            let tmp23 = obj22;
          } else {
            tmp23 = cResult[41];
          }
          first1 = tmp23;
        }
      } else if (null != author) {
        if (cResult[42] !== author.nick) {
          const intl6 = util.intl;
          const obj23 = { username: author.nick };
          const formatToPlainStringResult7 = intl6.formatToPlainString(util.t["7FJeVi"], obj23);
          cResult[42] = author.nick;
          cResult[43] = formatToPlainStringResult7;
          let tmp18 = formatToPlainStringResult7;
        } else {
          tmp18 = cResult[43];
        }
        if (cResult[44] !== tmp18) {
          const obj24 = { text: tmp18, secondaryText: null };
          cResult[44] = tmp18;
          cResult[45] = obj24;
          let tmp20 = obj24;
        } else {
          tmp20 = cResult[45];
        }
        first1 = tmp20;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
          const obj25 = { text: null, secondaryText: null };
          const intl5 = util.intl;
          obj25.text = intl5.string(util.t.sDqZHL);
          cResult[46] = obj25;
          let tmp17 = obj25;
        } else {
          tmp17 = cResult[46];
        }
        first1 = tmp17;
      }
    } else {
      if (cResult[47] === author) {
        if (cResult[48] === length) {
          if (cResult[50] === author) {
            if (cResult[51] === length) {
              let tmp10 = cResult[52];
              if (tmp66) {
                tmp10 = tmp6;
              }
              if (cResult[53] !== tmp10) {
                const obj26 = { text: tmp10, secondaryText: null };
                cResult[53] = tmp10;
                cResult[54] = obj26;
                let tmp14 = obj26;
              } else {
                tmp14 = cResult[54];
              }
              first1 = tmp14;
            }
          }
          if (null != author) {
            const intl4 = util.intl;
            const obj27 = { count: length, username: author.nick };
            let formatResult = intl4.format(util.t["1OSGGk"], obj27);
          } else {
            const intl3 = util.intl;
            const obj28 = { count: length };
            formatResult = intl3.formatToPlainString(util.t["8/qgDd"], obj28);
          }
          cResult[50] = author;
          cResult[51] = length;
          cResult[52] = formatResult;
        }
      }
      if (null != author) {
        const intl2 = util.intl;
        const obj29 = { count: length, username: author.nick };
        let formatResult1 = intl2.format(util.t["319zWs"], obj29);
      } else {
        const intl = util.intl;
        const obj30 = { count: length };
        formatResult1 = intl.formatToPlainString(util.t.y0gZht, obj30);
      }
      cResult[47] = author;
      cResult[48] = previewableMedia.length;
      cResult[49] = formatResult1;
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
  return noop.useMemo(() => {
    if (0 === previewableMedia.length) {
      return { text: null, secondaryText: null };
    } else if (1 === previewableMedia.length) {
      const first = previewableMedia[0];
      const type = first.type;
      if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
        if (null != author) {
          const obj2 = { text: null, secondaryText: null };
          const intl20 = util.intl;
          const obj3 = { username: tmp90.nick };
          obj2.text = intl20.formatToPlainString(util.t.pTiyNB, obj3);
          let obj4 = obj2;
        } else {
          obj4 = { text: null, secondaryText: null };
          const intl19 = util.intl;
          obj4.text = intl19.string(util.t.tCcq5p);
        }
        return obj4;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
        if (null != author) {
          const obj5 = { text: null, secondaryText: null };
          const intl18 = util.intl;
          const obj6 = { username: tmp80.nick };
          obj5.text = intl18.formatToPlainString(util.t.zqhHWH, obj6);
          let obj7 = obj5;
        } else {
          obj7 = { text: null, secondaryText: null };
          const intl17 = util.intl;
          obj7.text = intl17.string(util.t.KxO2Yl);
        }
        return obj7;
      } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
        if (null != author) {
          const obj8 = { text: null, secondaryText: null };
          const intl16 = util.intl;
          const obj9 = { username: tmp70.nick };
          obj8.text = intl16.formatToPlainString(util.t.HADQ6n, obj9);
          obj8.secondaryText = first.media.filename;
          let obj10 = obj8;
        } else {
          obj10 = { text: null, secondaryText: null };
          const intl15 = util.intl;
          obj10.text = intl15.string(util.t.FWqQt5);
          obj10.secondaryText = first.media.filename;
        }
        return obj10;
      } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
        if (null != author) {
          const obj11 = { text: null, secondaryText: null };
          const intl14 = util.intl;
          const obj12 = { username: tmp60.nick };
          obj11.text = intl14.formatToPlainString(util.t["ifW/ef"], obj12);
          obj11.secondaryText = first.media.filename;
          let obj13 = obj11;
        } else {
          obj13 = { text: null, secondaryText: null };
          const intl13 = util.intl;
          obj13.text = intl13.string(util.t.mX8M6i);
          obj13.secondaryText = first.media.filename;
        }
        return obj13;
      } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
        if (null != author) {
          const obj14 = { text: null, secondaryText: null };
          const intl12 = util.intl;
          const obj15 = { username: tmp50.nick };
          obj14.text = intl12.formatToPlainString(util.t["3iI/fs"], obj15);
          let obj16 = obj14;
        } else {
          obj16 = { text: null, secondaryText: null };
          const intl11 = util.intl;
          obj16.text = intl11.string(util.t.dyquw8);
        }
        return obj16;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        if (null != author) {
          const obj17 = { text: null, secondaryText: null };
          const intl10 = util.intl;
          const obj18 = { username: tmp40.nick };
          obj17.text = intl10.formatToPlainString(util.t.Y7wlOj, obj18);
          let obj19 = obj17;
        } else {
          obj19 = { text: null, secondaryText: null };
          const intl9 = util.intl;
          obj19.text = intl9.string(util.t.slFYgi);
        }
        return obj19;
      } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
        if (null != author) {
          const obj20 = { text: null, secondaryText: null };
          const intl8 = util.intl;
          const obj21 = { username: tmp30.nick };
          obj20.text = intl8.formatToPlainString(util.t.mikhon, obj21);
          let obj22 = obj20;
        } else {
          obj22 = { text: null, secondaryText: null };
          const intl7 = util.intl;
          obj22.text = intl7.string(util.t.p0oZmy);
        }
        return obj22;
      } else {
        if (null != author) {
          const obj23 = { text: null, secondaryText: null };
          const intl6 = util.intl;
          const obj24 = { username: tmp115.nick };
          obj23.text = intl6.formatToPlainString(util.t["7FJeVi"], obj24);
          let obj25 = obj23;
        } else {
          obj25 = { text: null, secondaryText: null };
          const intl5 = util.intl;
          obj25.text = intl5.string(util.t.sDqZHL);
        }
        return obj25;
      }
    } else {
      if (null != author) {
        const intl2 = util.intl;
        const obj26 = { count: length, username: author.nick };
        let formatResult = intl2.format(util.t["319zWs"], obj26);
      } else {
        const intl = util.intl;
        const obj = { count: length };
        formatResult = intl.formatToPlainString(util.t.y0gZht, obj);
      }
      if (null != author) {
        const intl4 = util.intl;
        const obj27 = { count: length, username: author.nick };
        let formatResult1 = intl4.format(util.t["1OSGGk"], obj27);
      } else {
        const intl3 = util.intl;
        const obj28 = { count: length };
        formatResult1 = intl3.formatToPlainString(util.t["8/qgDd"], obj28);
      }
      if (everyResult) {
        formatResult1 = formatResult;
      }
      const obj29 = { text: formatResult1, secondaryText: null };
      return obj29;
    }
  }, items);
});