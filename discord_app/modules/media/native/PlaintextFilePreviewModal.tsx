// discord_app/modules/media/native/PlaintextFilePreviewModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import CheckmarkSmallIcon2 from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import openPlaintextFilePreview from "openPlaintextFilePreview.tsx";
import useDownloadedFile from "../useDownloadedFile.tsx";
import PlaintextFileMarkdownPreviewDefault from "PlaintextFileMarkdownPreview.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function closeModal() {
  ModalActionCreatorsDefault.popWithKey(openPlaintextFilePreview.PLAINTEXT_FILE_PREVIEW_MODAL_KEY);
}
function PlaintextFilePreviewContent(arg0) {
  ({ url, wordWrap, renderMarkdown } = arg0);
  const tmp = closure_9();
  const downloadedFile = useDownloadedFile.useDownloadedFile(url, undefined);
  const fileContents = downloadedFile.fileContents;
  if (downloadedFile.hadError) {
    const obj2 = { style: tmp.errorContainer, children: null };
    const obj3 = { variant: "body-md/normal", color: "text-muted", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.fEptJP);
    obj2.children = jsx(Text_Text.Text, { variant: "body-md/normal", color: "text-muted", children: null });
    return <timestampProducer style={tmp.errorContainer}>{null}</timestampProducer>;
  } else if (null == fileContents) {
    const obj4 = {
      style: tmp.loadingContainer,
      children: jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}),
    };
    return (
      <timestampProducer style={tmp.loadingContainer}>
        {jsx(ActivityIndicator_ActivityIndicator.ActivityIndicator, {})}
      </timestampProducer>
    );
  } else {
    const bytesLeftNotice = useDownloadedFile.getBytesLeftNotice(tmp5);
    if (renderMarkdown) {
      const obj7 = { style: null, contentContainerStyle: null, children: null };
      ({ scroller: obj6.style, scrollerContent: obj6.contentContainerStyle } = tmp);
      const obj8 = { text: fileContents, notice: bytesLeftNotice };
      obj7.children = jsx(PlaintextFileMarkdownPreviewDefault, { text: fileContents, notice: bytesLeftNotice });
      return (
        <hasOwnProperty style={null} contentContainerStyle={null}>
          {null}
        </hasOwnProperty>
      );
    } else {
      let combined = fileContents;
      if ("" !== bytesLeftNotice) {
        const _HermesInternal = HermesInternal;
        combined = "" + fileContents + "\n" + bytesLeftNotice;
      }
      const obj9 = {
        variant: "body-sm/normal",
        color: "text-default",
        style: tmp.code,
        selectable: true,
        children: combined,
      };
      const tmp10 = jsx(Text_Text.Text, {
        variant: "body-sm/normal",
        color: "text-default",
        style: tmp.code,
        selectable: true,
        children: combined,
      });
      if (wordWrap) {
        const obj10 = { style: null, contentContainerStyle: null, children: null };
        ({ scroller: obj5.style, scrollerContent: obj5.contentContainerStyle } = tmp);
        obj10.children = tmp10;
        let obj11 = obj10;
      } else {
        obj11 = { style: tmp.scroller, children: null };
        const obj20 = { horizontal: true, contentContainerStyle: tmp.scrollerContent, children: tmp10 };
        obj11.children = (
          <hasOwnProperty horizontal contentContainerStyle={tmp.scrollerContent}>
            {tmp10}
          </hasOwnProperty>
        );
      }
      return <hasOwnProperty {...obj11} />;
    }
    const tmp2Result = useDownloadedFile;
  }
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_8 = { PREVIEW: "PREVIEW" };
const createStyles = fn(5306);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  scroller: { flex: 1 },
  scrollerContent: null,
  code: null,
  errorContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollerContent = { padding: nativeDefault.space.PX_16 };
obj2.code = { fontFamily: fn(1083).Fonts.CODE_NORMAL };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.errorContainer = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media/native/PlaintextFilePreviewModal.tsx");

export default function PlaintextFilePreviewModal(url) {
  url = url.url;
  const str = url.fileName;
  let first;
  noop = undefined;
  let memo;
  const tmp = closure_9();
  dependencyMap = tmp;
  const tmp2 = first(noop.useState(true), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const MARKDOWN_LANGUAGES = url(12522).MARKDOWN_LANGUAGES;
  const parts = str.split(".");
  const hasItem = MARKDOWN_LANGUAGES.has(parts.slice(-1)[0]);
  const tmp7 = first(noop.useState(true), 2);
  closure_6 = tmp7[1];
  let first1 = hasItem;
  if (hasItem) {
    first1 = tmp7[0];
  }
  items = [hasItem, first1, url, first];
  memo = obj.useMemo(() => {
    if (hasItem) {
      let obj = { label: null, trailingIndicator: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.zstmkn);
      let CheckmarkSmallIcon;
      if (first1) {
        CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      }
      obj.trailingIndicator = CheckmarkSmallIcon;
      obj.action = function action() {
        return closure_1_6((arg0) => !arg0);
      };
      items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [...items1];
    if (first1) {
      let items3 = [];
    } else {
      let obj2 = { label: null, trailingIndicator: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.AMKNT1);
      let CheckmarkSmallIcon1;
      if (first) {
        CheckmarkSmallIcon1 = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      }
      obj2.trailingIndicator = CheckmarkSmallIcon1;
      obj2.action = function action() {
        return closure_1_4((arg0) => !arg0);
      };
      items3 = [obj2];
    }
    let obj3 = { label: null, action: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t["1WjMbC"]);
    obj3.action = function action() {
      if (null == obj.isSuspiciousDownload(closure_1_0)) {
        str(dependencyMap[11]).openURL(closure_1_0);
        const obj3 = str(dependencyMap[11]);
      } else {
        str(dependencyMap[10]).show(closure_1_0);
        const obj2 = str(dependencyMap[10]);
      }
      obj = url(dependencyMap[9]);
    };
    items2[HermesBuiltin.arraySpread(items3, tmp9)] = obj3;
    return items2;
  }, items);
  let items1 = [str, memo, first1, tmp.container, url, first];
  const memo1 = obj.useMemo(() => {
    let obj = {};
    const obj2 = {
      title: str,
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
      headerRight() {
        return first1(url(container[20]).ContextMenu, {
          items,
          children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { IconComponent: url(7420).MoreHorizontalIcon, accessibilityLabel: null, ref: null };
            const intl = url(1113).intl;
            obj.accessibilityLabel = intl.string(url(1113).t.PdRCRg);
            obj.ref = ref.ref;
            const merged1 = Object.assign(merged);
            return renderMarkdown(url(7427).HeaderActionButton, obj);
          },
        });
      },
      render() {
        const obj = {
          style: container.container,
          children: first1(PlaintextFilePreviewContent, { url, wordWrap, renderMarkdown }),
        };
        return first1(closure_6, obj);
      },
    };
    obj[memo.PREVIEW] = obj2;
    return obj;
  }, items1);
  return first1(url(12523).Modal, { screens: memo1, initialRouteName: memo.PREVIEW });
}
