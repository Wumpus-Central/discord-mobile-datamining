// === Module 11291: PlaintextFilePreviewModal ===

// Module 11291 (PlaintextFilePreviewModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4841 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6075 */;
import NavigatorHeader from "NavigatorHeader" /* 6122 */;
import CheckmarkSmallIcon2 from "CheckmarkSmallIcon" /* 6740 */;
import openPlaintextFilePreview from "openPlaintextFilePreview" /* 11290 */;
import useDownloadedFile from "useDownloadedFile" /* 11294 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeModal() {
  ModalActionCreatorsDefault.popWithKey(openPlaintextFilePreview.PLAINTEXT_FILE_PREVIEW_MODAL_KEY);
}
function PlaintextFilePreviewContent(arg0) {
  ({ url, wordWrap } = arg0);
  const tmp = closure_9();
  const downloadedFile = useDownloadedFile.useDownloadedFile(url, undefined);
  const fileContents = downloadedFile.fileContents;
  if (downloadedFile.hadError) {
    const obj2 = { style: tmp.errorContainer, children: null };
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.fEptJP);
    obj2.children = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: null });
    return <timestampProducer style={tmp.errorContainer}>{null}</timestampProducer>;
  } else if (null == fileContents) {
    const obj4 = { style: tmp.loadingContainer, children: jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
    return <timestampProducer style={tmp.loadingContainer}>{jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}</timestampProducer>;
  } else {
    const bytesLeftNotice = useDownloadedFile.getBytesLeftNotice(tmp5);
    let combined = fileContents;
    if ("" !== bytesLeftNotice) {
      const _HermesInternal = HermesInternal;
      combined = "" + fileContents + "\n" + bytesLeftNotice;
    }
    const obj6 = { variant: "text-sm/normal", color: "text-default", style: tmp.code, selectable: true, children: combined };
    const tmp10 = jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", style: tmp.code, selectable: true, children: combined });
    if (wordWrap) {
      const obj7 = { style: null, contentContainerStyle: null, children: null };
      ({ scroller: obj5.style, scrollerContent: obj5.contentContainerStyle } = tmp);
      obj7.children = tmp10;
      let obj8 = obj7;
    } else {
      obj8 = { style: tmp.scroller, children: null };
      const obj9 = { horizontal: true, contentContainerStyle: tmp.scrollerContent, children: tmp10 };
      obj8.children = <hasOwnProperty horizontal contentContainerStyle={tmp.scrollerContent}>{tmp10}</hasOwnProperty>;
    }
    return <hasOwnProperty {...obj8} />;
  }
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const constants = { PREVIEW: "PREVIEW" };
const createStyles = fn(4845);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, scroller: { flex: 1 }, scrollerContent: null, code: null, errorContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollerContent = { padding: nativeDefault.space.PX_16 };
obj2.code = { fontFamily: fn(1085).Fonts.CODE_NORMAL };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.errorContainer = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media/native/PlaintextFilePreviewModal.tsx");

export default function PlaintextFilePreviewModal(url) {
  url = url.url;
  const fileName = url.fileName;
  let first;
  noop = undefined;
  const tmp = closure_9();
  dependencyMap = tmp;
  const tmp2 = first(noop.useState(true), 2);
  first = tmp2[0];
  noop = tmp2[1];
  let items = [url, first];
  const memo = noop.useMemo(() => {
    let obj = { label: null, trailingIndicator: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.AMKNT1);
    let CheckmarkSmallIcon;
    if (first) {
      CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon;
    obj.action = function action() {
      return closure_1_4((arg0) => !arg0);
    };
    const items = [obj, ];
    let obj2 = { label: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t["1WjMbC"]);
    obj2.action = function action() {
      if (null == obj.isSuspiciousDownload(closure_1_0)) {
        fileName(dependencyMap[11]).openURL(closure_1_0);
        const obj3 = fileName(dependencyMap[11]);
      } else {
        fileName(dependencyMap[10]).show(closure_1_0);
        const obj2 = fileName(dependencyMap[10]);
      }
      obj = url(dependencyMap[9]);
    };
    items[1] = obj2;
    return items;
  }, items);
  const items1 = [fileName, memo, tmp.container, url, first];
  const memo1 = noop.useMemo(() => {
    let obj = {};
    const obj2 = {
      title: fileName,
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
      headerRight() {
        return jsx(url(container[18]).ContextMenu, {
          items,
          children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { IconComponent: url(7538).MoreHorizontalIcon, accessibilityLabel: null, ref: null };
            const intl = url(1115).intl;
            obj.accessibilityLabel = intl.string(url(1115).t.PdRCRg);
            obj.ref = ref.ref;
            const merged1 = Object.assign(merged);
            return closure_1_7(url(6982).HeaderActionButton, obj);
          }
        });
      },
      render() {
        const obj = { style: container.container, children: <PlaintextFilePreviewContent url={url} wordWrap={wordWrap} /> };
        return <closure_2_6 style={container.container}><PlaintextFilePreviewContent url={url} wordWrap={wordWrap} /></closure_2_6>;
      }
    };
    obj[constants.PREVIEW] = obj2;
    return obj;
  }, items1);
  return jsx(url(10976).Modal, { screens: memo1, initialRouteName: constants.PREVIEW });
};