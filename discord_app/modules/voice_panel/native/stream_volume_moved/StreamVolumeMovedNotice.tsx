// discord_app/modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedNotice.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import useSelectedDismissibleContent from "../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
const showStreamVolumeMovedHint = fn(15763).showStreamVolumeMovedHint;
const VoicePanelControlsModes = fn(11983).VoicePanelControlsModes;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/StreamVolumeMovedNotice.tsx");

export default function StreamVolumeMovedNotice() {
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ setControlsMode: require, setFocused: importDefault } = context);
  items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  if (null != stateFromStores) {
    const items1 = [dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE];
    let items2 = items1;
  } else {
    items2 = [];
  }
  dependencyMap = _slicedToArray(
    useSelectedDismissibleContent.useSelectedDismissibleContent(items2, { bypassAutoDismiss: true }),
    2,
  )[1];
  if (null != stateFromStores) {
    if (tmp6 === dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE) {
      _slicedToArray = StreamKeyUtils.encodeStreamKey(stateFromStores);
      const obj3 = { title: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.pEAl4b);
      const obj4 = { label: null, trailing: null, arrow: true, onPress: null };
      const intl2 = util.intl;
      obj4.label = intl2.string(util.t["49qRvZ"]);
      const obj5 = { text: null };
      const intl3 = util.intl;
      obj5.text = intl3.string(util.t.YuNoIm);
      obj4.trailing = jsx(TableRow.TableRow.TrailingText, { text: null });
      obj4.onPress = function handlePress() {
        closure_2(ContentDismissActionType.TAKE_ACTION);
        showStreamVolumeMovedHint(closure_3);
        importDefault(closure_3);
        require({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
      };
      obj3.children = jsx(TableRow.TableRow, { label: null, trailing: null, arrow: true, onPress: null });
      return jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: false, children: null });
    }
  }
  return null;
}
