// === Module 10139: usePreviewableMediaText ===

// Module 10139 (usePreviewableMediaText)
import util from "util" /* 1114 */;
import usePreviewableMedia from "usePreviewableMedia" /* 10131 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMediaText.tsx");

export const usePreviewableMediaText = function usePreviewableMediaText(previewableMedia) {
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
          let obj = { text: null, secondaryText: null };
          const intl20 = util.intl;
          obj = { username: tmp90.nick };
          obj.text = intl20.formatToPlainString(util.t.pTiyNB, obj);
          let obj1 = obj;
        } else {
          obj1 = { text: null, secondaryText: null };
          const intl19 = util.intl;
          obj1.text = intl19.string(util.t.tCcq5p);
        }
        return obj1;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
        if (null != author) {
          const obj2 = { text: null, secondaryText: null };
          const intl18 = util.intl;
          const obj3 = { username: tmp80.nick };
          obj2.text = intl18.formatToPlainString(util.t.zqhHWH, obj3);
          let obj4 = obj2;
        } else {
          obj4 = { text: null, secondaryText: null };
          const intl17 = util.intl;
          obj4.text = intl17.string(util.t.KxO2Yl);
        }
        return obj4;
      } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
        if (null != author) {
          const obj5 = { text: null, secondaryText: null };
          const intl16 = util.intl;
          const obj6 = { username: tmp70.nick };
          obj5.text = intl16.formatToPlainString(util.t.HADQ6n, obj6);
          obj5.secondaryText = first.media.filename;
          let obj7 = obj5;
        } else {
          obj7 = { text: null, secondaryText: null };
          const intl15 = util.intl;
          obj7.text = intl15.string(util.t.FWqQt5);
          obj7.secondaryText = first.media.filename;
        }
        return obj7;
      } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
        if (null != author) {
          const obj8 = { text: null, secondaryText: null };
          const intl14 = util.intl;
          const obj9 = { username: tmp60.nick };
          obj8.text = intl14.formatToPlainString(util.t["ifW/ef"], obj9);
          obj8.secondaryText = first.media.filename;
          let obj10 = obj8;
        } else {
          obj10 = { text: null, secondaryText: null };
          const intl13 = util.intl;
          obj10.text = intl13.string(util.t.mX8M6i);
          obj10.secondaryText = first.media.filename;
        }
        return obj10;
      } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
        if (null != author) {
          const obj11 = { text: null, secondaryText: null };
          const intl12 = util.intl;
          const obj12 = { username: tmp50.nick };
          obj11.text = intl12.formatToPlainString(util.t["3iI/fs"], obj12);
          let obj13 = obj11;
        } else {
          obj13 = { text: null, secondaryText: null };
          const intl11 = util.intl;
          obj13.text = intl11.string(util.t.dyquw8);
        }
        return obj13;
      } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        if (null != author) {
          const obj14 = { text: null, secondaryText: null };
          const intl10 = util.intl;
          const obj15 = { username: tmp40.nick };
          obj14.text = intl10.formatToPlainString(util.t.Y7wlOj, obj15);
          let obj16 = obj14;
        } else {
          obj16 = { text: null, secondaryText: null };
          const intl9 = util.intl;
          obj16.text = intl9.string(util.t.slFYgi);
        }
        return obj16;
      } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
        if (null != author) {
          const obj17 = { text: null, secondaryText: null };
          const intl8 = util.intl;
          const obj18 = { username: tmp30.nick };
          obj17.text = intl8.formatToPlainString(util.t.mikhon, obj18);
          let obj19 = obj17;
        } else {
          obj19 = { text: null, secondaryText: null };
          const intl7 = util.intl;
          obj19.text = intl7.string(util.t.p0oZmy);
        }
        return obj19;
      } else {
        if (null != author) {
          const obj20 = { text: null, secondaryText: null };
          const intl6 = util.intl;
          const obj21 = { username: tmp115.nick };
          obj20.text = intl6.formatToPlainString(util.t["7FJeVi"], obj21);
          let obj22 = obj20;
        } else {
          obj22 = { text: null, secondaryText: null };
          const intl5 = util.intl;
          obj22.text = intl5.string(util.t.sDqZHL);
        }
        return obj22;
      }
    } else {
      if (null != author) {
        const intl2 = util.intl;
        const obj23 = { count: length, username: author.nick };
        let formatResult = intl2.format(util.t["319zWs"], obj23);
      } else {
        const intl = util.intl;
        obj = { count: length };
        formatResult = intl.formatToPlainString(util.t.y0gZht, obj);
      }
      if (null != author) {
        const intl4 = util.intl;
        const obj24 = { count: length, username: author.nick };
        let formatResult1 = intl4.format(util.t["1OSGGk"], obj24);
      } else {
        const intl3 = util.intl;
        const obj25 = { count: length };
        formatResult1 = intl3.formatToPlainString(util.t["8/qgDd"], obj25);
      }
      if (everyResult) {
        formatResult1 = formatResult;
      }
      const obj26 = { text: formatResult1, secondaryText: null };
      return obj26;
    }
  }, items);
};