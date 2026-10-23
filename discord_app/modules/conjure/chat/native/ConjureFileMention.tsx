// === Module 11778: ConjureFileMention ===

// Module 11778 (ConjureFileMention)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5220 */;
import conjureFileMentions from "conjureFileMentions" /* 11777 */;
import conjureStoredAttachments from "conjureStoredAttachments" /* 11779 */;
import ConjureFileThumbnailDefault from "ConjureFileThumbnail" /* 11781 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4969);
let obj2 = { chip: null, thumbnail: null, name: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, transform: null };
let items = [{ translateY: nativeDefault.space.PX_4 }];
obj3.transform = items;
obj2.chip = obj3;
let size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj2.thumbnail = size;
let obj4 = { translateY: nativeDefault.space.PX_4 };
obj2.name = { color: nativeDefault.colors.MENTION_FOREGROUND };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj5 = { color: nativeDefault.colors.MENTION_FOREGROUND };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileMention.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureFileMention(variant) {
  const cResult = c.c(14);
  variant = variant.variant;
  let str = "text-md/normal";
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_7();
  const context = noop.useContext(conjureFileMentions.ConjureFileMentionProjectContext);
  const conjureStoredAttachment = conjureStoredAttachments.useConjureStoredAttachment(context, variant.attachmentId);
  if (cResult[0] === conjureStoredAttachment) {
    if (cResult[1] === context) {
      if (cResult[2] === tmp4.thumbnail) {
        let tmp7 = cResult[3];
      }
      let name;
      if (conjureStoredAttachment != null) {
        name = conjureStoredAttachment.name;
      }
      if (cResult[4] !== name) {
        let name1;
        if (conjureStoredAttachment != null) {
          name1 = conjureStoredAttachment.name;
        }
        if (name1 == null) {
          const intl = util.intl;
          name1 = intl.string(_modDef3830.ff9Q4C);
        }
        let name2;
        if (conjureStoredAttachment != null) {
          name2 = conjureStoredAttachment.name;
        }
        cResult[4] = name2;
        cResult[5] = name1;
        let tmp12 = name1;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp4.name) {
        if (cResult[7] === tmp12) {
          if (cResult[8] === str) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] === tmp4.chip) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp16) {
                let tmp19 = cResult[13];
              }
              return tmp19;
            }
          }
          const obj2 = { style: tmp4.chip, children: null };
          const items = [tmp7, tmp16];
          obj2.children = items;
          const tmp22 = timestampProducer(View, obj2);
          cResult[10] = tmp4.chip;
          cResult[11] = tmp7;
          cResult[12] = tmp16;
          cResult[13] = tmp22;
          tmp19 = tmp22;
        }
      }
      const obj3 = { variant: str, style: tmp4.name, children: tmp12 };
      const tmp18 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[6] = tmp4.name;
      cResult[7] = tmp12;
      cResult[8] = str;
      cResult[9] = tmp18;
      tmp16 = tmp18;
    }
  }
  const obj4 = { projectId: context, file: conjureStoredAttachment, style: tmp4.thumbnail, iconColor: null };
  const tmpResult = conjureStoredAttachments;
  obj4.iconColor = nativeDefault.colors.MENTION_FOREGROUND;
  const tmp9 = hasOwnProperty(ConjureFileThumbnailDefault, obj4);
  cResult[0] = conjureStoredAttachment;
  cResult[1] = context;
  cResult[2] = tmp4.thumbnail;
  cResult[3] = tmp9;
  tmp7 = tmp9;
}) : (function ConjureFileMention(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "text-md/normal";
  }
  const tmp = closure_7();
  const context = noop.useContext(conjureFileMentions.ConjureFileMentionProjectContext);
  const conjureStoredAttachment = conjureStoredAttachments.useConjureStoredAttachment(context, variant.attachmentId);
  const obj2 = { style: tmp.chip, children: null };
  const obj3 = { projectId: context, file: conjureStoredAttachment, style: tmp.thumbnail, iconColor: null };
  obj3.iconColor = nativeDefault.colors.MENTION_FOREGROUND;
  const items = [hasOwnProperty(ConjureFileThumbnailDefault, obj3), ];
  const obj4 = { variant: str, style: tmp.name, children: null };
  let name;
  if (conjureStoredAttachment != null) {
    name = conjureStoredAttachment.name;
  }
  if (name == null) {
    const intl = util.intl;
    name = intl.string(_modDef3830.ff9Q4C);
  }
  obj4.children = name;
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  return timestampProducer(View, obj2);
});