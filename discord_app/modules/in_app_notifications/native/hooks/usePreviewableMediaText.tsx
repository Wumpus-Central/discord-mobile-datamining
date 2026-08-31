// === Module 10181: usePreviewableMediaText ===

// Module 10181 (usePreviewableMediaText)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx");

export const usePreviewableMediaText = function usePreviewableMediaText(previewableMedia) {
  previewableMedia = previewableMedia.previewableMedia;
  const author = previewableMedia.author;
  const items = [author, previewableMedia];
  return React.useMemo(() => {
    if (0 === previewableMedia.length) {
      return { text: null, secondaryText: null };
    } else if (1 === arr.length) {
      const first = arr[0];
      const type = first.type;
      if (previewableMedia(author[1]).PreviewableMediaTypes.IMAGE === type) {
        if (null != author) {
          let obj = { text: null, secondaryText: null };
          const intl20 = previewableMedia(author[2]).intl;
          obj = { username: null };
          obj[0] = tmp90.nick;
          obj[0] = intl20.formatToPlainString(previewableMedia(author[2]).t.pTiyNB, obj);
          obj1 = obj;
        } else {
          obj1 = { text: null, secondaryText: null };
          const intl19 = previewableMedia(author[2]).intl;
          obj1[0] = intl19.string(previewableMedia(author[2]).t.tCcq5p);
        }
        return obj1;
      } else {
        let everyResult = previewableMedia;
        everyResult = author;
        if (previewableMedia(author[1]).PreviewableMediaTypes.VIDEO === type) {
          if (null != author) {
            const obj2 = { text: null, secondaryText: null };
            const intl18 = previewableMedia(author[2]).intl;
            const obj3 = { username: null };
            obj3[0] = tmp80.nick;
            obj2[0] = intl18.formatToPlainString(previewableMedia(author[2]).t.zqhHWH, obj3);
            let obj4 = obj2;
          } else {
            obj4 = { text: null, secondaryText: null };
            const intl17 = previewableMedia(author[2]).intl;
            obj4[0] = intl17.string(previewableMedia(author[2]).t.KxO2Yl);
          }
          return obj4;
        } else {
          everyResult = previewableMedia;
          everyResult = author;
          if (previewableMedia(author[1]).PreviewableMediaTypes.AUDIO === type) {
            if (null != author) {
              const obj5 = { text: null, secondaryText: null };
              const intl16 = previewableMedia(author[2]).intl;
              const obj6 = { username: null };
              obj6[0] = tmp70.nick;
              obj5[0] = intl16.formatToPlainString(previewableMedia(author[2]).t.HADQ6n, obj6);
              obj5[1] = first.media.filename;
              let obj7 = obj5;
            } else {
              obj7 = { text: null, secondaryText: null };
              const intl15 = previewableMedia(author[2]).intl;
              obj7[0] = intl15.string(previewableMedia(author[2]).t.FWqQt5);
              obj7[1] = first.media.filename;
            }
            return obj7;
          } else {
            everyResult = previewableMedia;
            everyResult = author;
            if (previewableMedia(author[1]).PreviewableMediaTypes.FILE === type) {
              if (null != author) {
                const obj8 = { text: null, secondaryText: null };
                const intl14 = previewableMedia(author[2]).intl;
                const obj9 = { username: null };
                obj9[0] = tmp60.nick;
                obj8[0] = intl14.formatToPlainString(previewableMedia(author[2]).t["ifW/ef"], obj9);
                obj8[1] = first.media.filename;
                let obj10 = obj8;
              } else {
                obj10 = { text: null, secondaryText: null };
                const intl13 = previewableMedia(author[2]).intl;
                obj10[0] = intl13.string(previewableMedia(author[2]).t.mX8M6i);
                obj10[1] = first.media.filename;
              }
              return obj10;
            } else {
              everyResult = previewableMedia;
              everyResult = author;
              if (previewableMedia(author[1]).PreviewableMediaTypes.STICKER === type) {
                if (null != author) {
                  const obj11 = { text: null, secondaryText: null };
                  const intl12 = previewableMedia(author[2]).intl;
                  const obj12 = { username: null };
                  obj12[0] = tmp50.nick;
                  obj11[0] = intl12.formatToPlainString(previewableMedia(author[2]).t["3iI/fs"], obj12);
                  let obj13 = obj11;
                } else {
                  obj13 = { text: null, secondaryText: null };
                  const intl11 = previewableMedia(author[2]).intl;
                  obj13[0] = intl11.string(previewableMedia(author[2]).t.dyquw8);
                }
                return obj13;
              } else {
                everyResult = previewableMedia;
                everyResult = author;
                if (previewableMedia(author[1]).PreviewableMediaTypes.VOICE_MESSAGE === type) {
                  if (null != author) {
                    const obj14 = { text: null, secondaryText: null };
                    const intl10 = previewableMedia(author[2]).intl;
                    const obj15 = { username: null };
                    obj15[0] = tmp40.nick;
                    obj14[0] = intl10.formatToPlainString(previewableMedia(author[2]).t.Y7wlOj, obj15);
                    let obj16 = obj14;
                  } else {
                    obj16 = { text: null, secondaryText: null };
                    const intl9 = previewableMedia(author[2]).intl;
                    obj16[0] = intl9.string(previewableMedia(author[2]).t.slFYgi);
                  }
                  return obj16;
                } else {
                  everyResult = previewableMedia;
                  everyResult = author;
                  if (previewableMedia(author[1]).PreviewableMediaTypes.GIF === type) {
                    if (null != author) {
                      const obj17 = { text: null, secondaryText: null };
                      const intl8 = previewableMedia(author[2]).intl;
                      const obj18 = { username: null };
                      obj18[0] = tmp30.nick;
                      obj17[0] = intl8.formatToPlainString(previewableMedia(author[2]).t.mikhon, obj18);
                      let obj19 = obj17;
                    } else {
                      obj19 = { text: null, secondaryText: null };
                      const intl7 = previewableMedia(author[2]).intl;
                      obj19[0] = intl7.string(previewableMedia(author[2]).t.p0oZmy);
                    }
                    return obj19;
                  } else {
                    everyResult = null;
                    if (null != author) {
                      const obj20 = { text: null, secondaryText: null };
                      const intl6 = previewableMedia(author[2]).intl;
                      const obj21 = { username: null };
                      obj21[0] = everyResult.nick;
                      obj20[0] = intl6.formatToPlainString(previewableMedia(author[2]).t["7FJeVi"], obj21);
                      let obj22 = obj20;
                    } else {
                      obj22 = { text: null, secondaryText: null };
                      const intl5 = previewableMedia(author[2]).intl;
                      obj22[0] = intl5.string(previewableMedia(author[2]).t.sDqZHL);
                    }
                    return obj22;
                  }
                }
              }
            }
          }
        }
      }
    } else {
      everyResult = author;
      everyResult = null;
      everyResult = arr.every((type) => type.type === callback(table[1]).PreviewableMediaTypes.FILE);
      if (null != author) {
        const intl2 = previewableMedia(author[2]).intl;
        const obj23 = { count: null, username: null };
        obj23[0] = length;
        obj23[1] = everyResult.nick;
        let formatResult = intl2.format(previewableMedia(author[2]).t["319zWs"], obj23);
      } else {
        everyResult = previewableMedia;
        const intl = previewableMedia(author[2]).intl;
        obj = { count: null };
        obj[0] = length;
        formatResult = intl.formatToPlainString(previewableMedia(author[2]).t.y0gZht, obj);
      }
      if (null != everyResult) {
        const intl4 = previewableMedia(author[2]).intl;
        const obj24 = { count: null, username: null };
        obj24[0] = length;
        obj24[1] = everyResult.nick;
        let formatResult1 = intl4.format(previewableMedia(author[2]).t["1OSGGk"], obj24);
      } else {
        const intl3 = previewableMedia(author[2]).intl;
        const obj25 = { count: null };
        obj25[0] = length;
        formatResult1 = intl3.formatToPlainString(previewableMedia(author[2]).t["8/qgDd"], obj25);
      }
      if (everyResult) {
        formatResult1 = formatResult;
      }
      const obj26 = { text: null, secondaryText: null };
      obj26[0] = formatResult1;
      return obj26;
    }
  }, items);
};