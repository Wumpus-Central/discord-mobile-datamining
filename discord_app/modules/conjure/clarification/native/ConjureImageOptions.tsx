// === Module 12758: clarification/ConjureImageOptions ===

// Module 12758 (clarification/ConjureImageOptions)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5082 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TrashIcon from "TrashIcon" /* 5738 */;
import Card from "Card" /* 6977 */;
import FormCheckbox from "FormCheckbox" /* 6989 */;
import FormRadio from "FormRadio" /* 7062 */;
import IconButton from "IconButton" /* 8028 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8653 */;
import openMediaModal from "openMediaModal" /* 8833 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12490 */;
import ConjureImageOptions from "ConjureImageOptions" /* 12756 */;
import MaximizeIcon2 from "MaximizeIcon" /* 12759 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ImageOptionPicture(onMeasured) {
  onMeasured = onMeasured.onMeasured;
  ({ projectId, attachmentId, inert } = onMeasured);
  let tmp = closure_10();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, attachmentId);
  const src = conjureAttachmentImage.src;
  const items = [tmp.frame, ];
  let frameInert = null;
  ({ gone, handleError } = conjureAttachmentImage);
  if (inert) {
    frameInert = tmp.frameInert;
  }
  items[1] = frameInert;
  const obj2 = { style: items, children: null };
  if (gone) {
    const obj3 = { style: tmp.broken, children: null };
    const obj4 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
    const items1 = [React6(ImageWarningIcon.ImageWarningIcon, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.brokenText, children: null };
    const intl = util.intl;
    obj5.children = intl.string(_modDef3868.lhgD88);
    items1[1] = React6(Text_Text.Text, obj5);
    obj3.children = items1;
    obj2.children = React7(React5, obj3);
    let tmp10 = obj2;
  } else {
    let tmp6Result = null;
    if (null != src) {
      const obj6 = { source: null, style: null, resizeMode: "contain", onLoad: null, onError: null, accessible: false };
      const obj7 = { uri: src };
      obj6.source = obj7;
      obj6.style = tmp.image;
      obj6.onLoad = function onLoad(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        let source = nativeEvent;
        if ("source" in nativeEvent) {
          source = nativeEvent.source;
        }
        ({ width, height } = source);
        if (tmp) {
          const size = { width, height };
          onMeasured(size);
        }
        tmp = width > 0 && height > 0;
      };
      obj6.onError = handleError;
      tmp6Result = React6(FastImageDefault, obj6);
    }
    obj2.children = tmp6Result;
    tmp10 = obj2;
  }
  return React6(React5, tmp10);
}
function ImageOptionTile(option) {
  option = option.option;
  ({ multi, galleryWidth, selected, disabled, frameHeight, onFrameHeight: importDefault, onPick: dependencyMap, onView: asyncGeneratorStep, onRemove } = option);
  ({ projectId, onMeasured } = option);
  const tmp = closure_10();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: selected, disabled });
  let radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled });
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  const intl = util.intl;
  if (null != galleryWidth) {
    const obj3 = { width: galleryWidth };
    let rowTile = obj3;
  } else {
    rowTile = tmp.rowTile;
  }
  const items = [rowTile, tmp.ring, ];
  let ringSelected = null;
  if (selected) {
    ringSelected = tmp.ringSelected;
  }
  const obj4 = { style: items, children: null };
  items[2] = ringSelected;
  const obj6 = { style: tmp.card, onPress: disabled ? (() => asyncGeneratorStep(option)) : (() => dependencyMap(option)), disabled: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, children: null };
  let tmp11 = disabled;
  if (disabled) {
    tmp11 = null == option.image;
  }
  obj6.disabled = tmp11;
  ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = radioA11yNative);
  const intl2 = util.intl;
  obj6.accessibilityLabel = intl2.formatToPlainString(_modDef3868.AQbxhf, { answer: option.label });
  if (null != onRemove) {
    const obj8 = { name: "remove", label: null };
    const intl3 = util.intl;
    obj8.label = intl3.string(_modDef3868.HQEXJM);
    const items1 = [obj8];
    let tmp12 = items1;
  } else if (null != option.image) {
    const obj9 = { name: "view", label: stringResult };
    const items2 = [obj9];
    tmp12 = items2;
  }
  obj6.accessibilityActions = tmp12;
  obj6.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    if ("view" === nativeEvent.actionName) {
      asyncGeneratorStep(option);
    }
    if ("remove" === nativeEvent.actionName) {
      if (onRemove != null) {
        tmp4();
      }
    }
  };
  const obj10 = {
    onLayout(nativeEvent) {
      return importDefault(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  if (null != option.image) {
    const obj11 = { projectId, attachmentId: option.image.attachment_id, inert: disabled, onMeasured };
    let tmp14 = React6(ImageOptionPicture, obj11);
    let tmp13 = React6;
  } else {
    tmp13 = React6;
    const obj12 = { style: tmp.frame };
    tmp14 = React6(React5, obj12);
  }
  const items3 = [tmp14, ];
  if (!multi) {
    if (!selected) {
      items3[1] = null;
      obj10.children = items3;
      const items4 = [React7(React5, obj10), ];
      const obj13 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.caption, children: ConjureImageOptions.imageOptionCaption(option) };
      items4[1] = tmp13(Text_Text.Text, obj13);
      obj6.children = items4;
      const items5 = [React7(Card.Card, obj6), ];
      let tmp13Result = null;
      if (null != option.image) {
        tmp13Result = null;
        if (null != frameHeight) {
          const obj14 = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
          const items6 = [tmp.view, ];
          const obj15 = { top: frameHeight - nativeDefault.space.PX_32 };
          items6[1] = obj15;
          obj14.style = items6;
          if (null != onRemove) {
            let MaximizeIcon = TrashIcon.TrashIcon;
          } else {
            MaximizeIcon = MaximizeIcon2.MaximizeIcon;
          }
          const obj16 = { icon: tmp13(MaximizeIcon, { size: "xs" }), size: "sm", variant: "secondary-overlay", onPress: null, accessibilityLabel: null };
          if (null == onRemove) {
            onRemove = () => asyncGeneratorStep(option);
          }
          obj16.onPress = onRemove;
          const intl4 = util.intl;
          const obj17 = { answer: option.label };
          obj16.accessibilityLabel = intl4.formatToPlainString(_modDef3868.JGjZMs, obj17);
          obj14.children = tmp13(IconButton.IconButton, obj16);
          tmp13Result = tmp13(React5, obj14);
        }
      }
      items5[1] = tmp13Result;
      obj4.children = items5;
      return React7(React5, obj4);
    }
  }
  const obj18 = { style: tmp.indicator, children: null };
  if (multi) {
    const obj19 = { checked: selected };
    let tmp13Result3 = tmp13(FormCheckbox.FormCheckbox, obj19);
  } else {
    const obj20 = { selected };
    tmp13Result3 = tmp13(FormRadio.FormRadio, obj20);
  }
  obj18.children = tmp13Result3;
  tmp13(React5, obj18);
  const obj7 = { answer: option.label };
  stringResult = intl.string(_modDef3868["4/eeDD"]);
}
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { row: { flexDirection: "row", gap: nativeDefault.space.PX_8 }, own: null, galleryContent: null, rowTile: null, card: null, ring: null, ringSelected: null, frame: null, frameInert: null, image: null, broken: null, brokenText: null, indicator: null, caption: null, view: null };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.own = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
let obj4 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj2.galleryContent = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.rowTile = { flex: 1, minWidth: 0 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.card = { padding: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
let obj6 = { padding: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
obj2.ring = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg };
let obj7 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg };
obj2.ringSelected = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
let obj8 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj2.frame = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj2.frameInert = { opacity: 0.5 };
obj2.image = { width: "100%", height: "100%" };
let obj9 = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj2.broken = { gap: nativeDefault.space.PX_4, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.brokenText = { textAlign: "center" };
let obj10 = { gap: nativeDefault.space.PX_4, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.indicator = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4, padding: 2, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
let obj11 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4, padding: 2, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj2.caption = { paddingHorizontal: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_4 };
let obj12 = { paddingHorizontal: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_4 };
obj2.view = { position: "absolute", end: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureImageOptions.tsx");

export default function ConjureImageOptions(projectId) {
  projectId = projectId.projectId;
  ({ question, selectedIds: importDefault, disabled } = projectId);
  ({ onPick: asyncGeneratorStep, own } = projectId);
  c10 = undefined;
  closure_13 = undefined;
  let bound;
  let memo;
  let onView;
  closure_17 = undefined;
  const tmp = c10();
  noop = tmp2;
  const options = question.options;
  let obj = projectId(disabled[17]);
  const imageOptionsLayoutResult = projectId(disabled[17]).imageOptionsLayout(options);
  noop.useRef(new Map());
  const tmp7 = own(noop.useState(null), 2);
  const frameHeight = tmp7[0];
  const onFrameHeight = tmp9;
  const map = new Map();
  [num, c10] = own(noop.useState(null), 2);
  const ref = noop.useRef(null);
  const image = own.image;
  let id;
  if (image != null) {
    id = image.attachment.id;
  }
  let items = [id];
  const effect = obj2.useEffect(() => {
    if (null != id) {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd({ animated: true });
      }
    }
  }, items);
  let num2 = 0;
  if (null != own.image) {
    num2 = 1;
  }
  const sum = options.length + num2;
  let tmp15 = null != num;
  if (tmp15) {
    tmp15 = (num - require("native").space.PX_8 * (sum - 1)) / sum < 104;
  }
  closure_13 = tmp17;
  bound = Math.max(104, Math.min(136, (num - 2 * require("native").space.PX_8) / 2.4));
  const items1 = [own.image];
  memo = obj2.useMemo(() => {
    let ownImageOptionResult = null;
    if (null != own.image) {
      ownImageOptionResult = ConjureImageOptions.ownImageOption(tmp.image);
    }
    return ownImageOptionResult;
  }, items1);
  const items2 = [options, memo, projectId];
  onView = obj2.useCallback((arg0) => {
    id = arg0;
    if (null == memo) {
      let items = options;
    } else {
      items = [];
      items[HermesBuiltin.arraySpread(options, 0)] = tmp;
    }
    const viewableImageOptionsResult = projectId(disabled[17]).viewableImageOptions(items);
    closure_1 = viewableImageOptionsResult;
    const findIndexResult = viewableImageOptionsResult.findIndex((id) => id.id === id.id);
    disabled = findIndexResult;
    if (findIndexResult >= 0) {
      Promise.all(viewableImageOptionsResult.map((image) => projectId(disabled[21]).getAttachmentUrl(closure_0, image.image.attachment_id))).then((arr) => {
        const mapped = arr.map((uri, mediaIndex) => {
          const current = ref.current;
          value = current.get(dependencyMap[mediaIndex].id);
          let result = null;
          if (null != value) {
            result = projectId(disabled[17]).imageOptionViewerSize(value);
            const obj = projectId(disabled[17]);
          }
          const size = { uri, mediaIndex, width: null, height: null, accessoryType: "embed", description: null, disableDownload: true };
          let num;
          if (result != null) {
            num = result.width;
          }
          if (num == null) {
            num = 1024;
          }
          size.width = num;
          let num2;
          if (result != null) {
            num2 = result.height;
          }
          if (num2 == null) {
            num2 = 1024;
          }
          size.height = num2;
          size.description = dependencyMap[mediaIndex].label;
          return size;
        });
        openMediaModal.openMediaModal({ initialSources: mapped, initialIndex: findIndexResult, analyticsSource: "ConjureClarificationImageOptions", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true });
      }, () => {

      });
      const allPromises = Promise.all(viewableImageOptionsResult.map((image) => projectId(disabled[21]).getAttachmentUrl(closure_0, image.image.attachment_id)));
    }
    let obj = projectId(disabled[17]);
  }, items2);
  let mapped = options.map((option) => {
    projectId = option;
    const obj = { projectId, option, multi, galleryWidth: null, selected: null, disabled: null, frameHeight: null, onFrameHeight: null, onMeasured: null, onPick: null, onView: null };
    let tmp3 = null;
    if (closure_13) {
      tmp3 = bound;
    }
    obj.galleryWidth = tmp3;
    obj.selected = closure_1.includes(option.id);
    obj.disabled = disabled;
    obj.frameHeight = frameHeight;
    obj.onFrameHeight = onFrameHeight;
    obj.onMeasured = function onMeasured(arg0) {
      const current = ref.current;
      return current.set(option.id, arg0);
    };
    obj.onPick = onPick;
    obj.onView = onView;
    return frameHeight(id, obj, option.id);
  });
  if (null != memo) {
    const obj3 = { projectId, option: memo, multi: tmp2, galleryWidth: null, selected: null, disabled: null, frameHeight: null, onFrameHeight: null, onMeasured: null, onPick: null, onView: null, onRemove: null };
    let tmp21 = null;
    if (tmp17) {
      tmp21 = bound;
    }
    obj3.galleryWidth = tmp21;
    obj3.selected = own.selected;
    obj3.disabled = disabled;
    obj3.frameHeight = frameHeight;
    obj3.onFrameHeight = tmp9;
    obj3.onMeasured = function onMeasured(arg0) {
      const current = ref.current;
      return current.set(memo.id, arg0);
    };
    obj3.onPick = own.onPick;
    obj3.onView = onView;
    obj3.onRemove = own.onRemove;
    mapped.push(frameHeight(id, obj3, memo.id));
  }
  const items3 = [own, projectId];
  closure_17 = obj2.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp2(12761).pickConjurePhotos("photo", 1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          closure_128_1 = own(closure_128_0, 1)[0];
          if (null != closure_128_1) {
            closure_129_4.onUpload(tmp2(12761).uploadConjurePickedFile(closure_129_0, closure_128_1));
            const obj = tmp2(12761);
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  }), items3);
  let obj4 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  if ("gallery" === imageOptionsLayoutResult || tmp15) {
    let obj5 = { ref, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.galleryContent, children: mapped };
    let tmp25Result = tmp25(options, obj5);
    let tmp27 = tmp25;
  } else {
    let obj6 = { style: tmp.row, children: mapped };
    tmp25Result = tmp25(tmp24, obj6);
    tmp27 = tmp25;
  }
  const items4 = [tmp25Result, ];
  let tmp23Result = null;
  if (!disabled) {
    const obj7 = { style: tmp.own, children: null };
    const obj8 = {
      variant: "secondary",
      size: "sm",
      icon: tmp27(tmp3(disabled[25]).ImagePlusIcon, { size: "xs" }),
      text: tmp3(disabled[17]).ownImageUploadText(question),
      loading: "upload" === own.busy,
      onPress() {
          closure_17().catch(() => {

          });
        }
    };
    const items5 = [tmp27(tmp3(disabled[24]).Button, obj8), ];
    let tmp27Result = null;
    if (null != own.error) {
      const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: own.error.text };
      tmp27Result = tmp27(tmp3(disabled[9]).Text, obj9);
    }
    items5[1] = tmp27Result;
    obj7.children = items5;
    tmp23Result = tmp23(tmp24, obj7);
    const tmp3Result = tmp3(disabled[17]);
  }
  items4[1] = tmp23Result;
  obj4.children = items4;
  return onFrameHeight(ref, obj4);
};