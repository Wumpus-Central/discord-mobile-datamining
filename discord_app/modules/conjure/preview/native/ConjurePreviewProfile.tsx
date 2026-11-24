// === Module 18447: ConjurePreviewProfile ===

// Module 18447 (ConjurePreviewProfile)
import nativeDefault from "native" /* 575 */;
import OAuth2Scopes from "OAuth2Scopes" /* 5655 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6045 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 6048 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 7386 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7389 */;
import UserProfileWidgetsBoard from "UserProfileWidgetsBoard" /* 14382 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 14432 */;
import useApplicationWidgetLayoutRendererPropsDefault from "useApplicationWidgetLayoutRendererProps" /* 14487 */;
import noop from "module_19" /* 19 */;

require = fn;
function PreviewApplicationWidgetCard(arg0) {
  ({ userId, widget } = arg0);
  ({ cardStyle, isPreviewApp } = arg0);
  const tmp3 = useApplicationWidgetLayoutRendererPropsDefault(userId, widget.applicationId);
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(widget.applicationId);
  const token = useStartAuthorizeDefault(getOrFetchApplication).token;
  if (!isPreviewApp) {
    if (!tmp3.isLoading) {
      if (!tmp3.hasIdentity) {
        if (tmp7) {
          if (tmp8) {
            let tmp10 = null != token;
            if (tmp10) {
              const _Array = Array;
              let someResult = Array.from(OAuth2Scopes.OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES).some((item) => {
                const scopes = token.scopes;
                return scopes.includes(item);
              });
              if (!someResult) {
                let scopes = token.scopes;
                someResult = scopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER);
              }
              if (!someResult) {
                const scopes2 = token.scopes;
                someResult = scopes2.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE);
              }
              tmp10 = someResult;
              const arr = Array.from(OAuth2Scopes.OAuth2ScopesSets.APPLICATION_IDENTITIES_SCOPES);
            }
            let tmp13 = null;
          }
          return tmp13;
        }
      }
    }
  }
  tmp13 = timestampProducer(UserProfileApplicationWidgetCardDefault, { userId, widget, cardStyle, rendererProps: tmp3 });
  const tmp6 = useStartAuthorizeDefault(getOrFetchApplication);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(5146).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(4917);
let obj2 = { container: { flex: 1 }, content: { paddingTop: fn(7431).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING, paddingBottom: nativeDefault.space.PX_24 }, tabs: null, tab: null, selectedTab: null, board: null };
let obj3 = { paddingTop: fn(7431).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING, paddingBottom: nativeDefault.space.PX_24 };
obj2.tabs = { flexDirection: "row", gap: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.tab = { paddingBottom: nativeDefault.space.PX_8 };
let obj5 = { paddingBottom: nativeDefault.space.PX_8 };
obj2.selectedTab = { borderBottomWidth: 2, borderBottomColor: nativeDefault.colors.TEXT_STRONG };
let obj6 = { borderBottomWidth: 2, borderBottomColor: nativeDefault.colors.TEXT_STRONG };
obj2.board = { gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/native/ConjurePreviewProfile.tsx");

export default function ConjurePreviewProfile(user) {
  user = user.user;
  const applicationId = user.applicationId;
  items = undefined;
  const tmp = closure_8();
  const tmp2 = applicationId(items[12])();
  let tmp3 = applicationId(items[14])(ACTION_SHEET_MAX_WIDTH);
  const tmp4 = applicationId(items[15])(user.id);
  const tmp5 = applicationId(items[16])({ user, displayProfile: tmp4 });
  const userProfileColors = user(items[17]).useUserProfileColors(tmp5);
  ({ containerBackground, avatarBackground, statusBackground } = userProfileColors);
  let obj = user(items[17]);
  items = [tmp2.card, { backgroundColor: containerBackground }];
  let obj2 = { theme: tmp5.theme, primaryColor: tmp5.primaryColor, secondaryColor: tmp5.secondaryColor, children: null };
  const obj3 = { style: tmp.container, children: null };
  const items1 = [closure_6(applicationId(items[20]), { gradientHeight: applicationId(items[13])().height, bannerHeight: tmp3 }), ];
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { pointerEvents: "none", importantForAccessibility: "yes", accessibilityLabel: null, children: null };
  const intl = user(items[21]).intl;
  obj5.accessibilityLabel = intl.string(user(items[21]).t.Vs0dLi);
  const items2 = [closure_6(applicationId(items[22]), { user, displayProfile: tmp4, bannerHeight: tmp3, disableInteraction: true }), ];
  const obj6 = { children: null };
  const items3 = [closure_6(applicationId(items[23]), { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground } }), ];
  const obj8 = { style: null, children: null };
  const items4 = [tmp.content, tmp2.profileContent];
  obj8.style = items4;
  const arr = applicationId(items[18])(user.id, user.projectId, applicationId);
  const obj7 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground } };
  const items5 = [closure_6(closure_4, { style: tmp2.primaryInfo, children: closure_6(user(items[24]).PrimaryInfo, { user, displayProfile: tmp4, badgeContainerBackground: containerBackground, isPreviewingChanges: true }) }), , ];
  const obj10 = { style: tmp.tabs, children: null };
  const obj11 = { variant: "body-md/semibold", color: "text-strong", style: null, children: null };
  const items6 = [, ];
  ({ tab: arr8[0], selectedTab: arr8[1] } = tmp);
  obj11.style = items6;
  const intl2 = user(items[21]).intl;
  obj11.children = intl2.string(user(items[21]).t.laViwx);
  const items7 = [closure_6(user(items[25]).Text, obj11), , ];
  const obj12 = { variant: "body-md/medium", color: "text-subtle", style: tmp.tab, children: null };
  const intl3 = user(items[21]).intl;
  obj12.children = intl3.string(user(items[21]).t.chq59f);
  items7[1] = closure_6(user(items[25]).Text, obj12);
  const obj13 = { variant: "body-md/medium", color: "text-subtle", style: tmp.tab, children: null };
  const intl4 = user(items[21]).intl;
  obj13.children = intl4.string(user(items[21]).t["7lZ31J"]);
  items7[2] = closure_6(user(items[25]).Text, obj13);
  obj10.children = items7;
  items5[1] = closure_7(closure_4, obj10);
  const obj9 = { style: tmp2.primaryInfo, children: closure_6(user(items[24]).PrimaryInfo, { user, displayProfile: tmp4, badgeContainerBackground: containerBackground, isPreviewingChanges: true }) };
  items5[2] = closure_6(closure_4, {
    style: tmp.board,
    children: arr.map((widget) => {
      if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
        const obj = { userId: user.id, widget, cardStyle: items, isPreviewApp: widget.applicationId === applicationId };
        let tmp3 = timestampProducer(PreviewApplicationWidgetCard, obj, widget.getUniqueKey());
      } else {
        tmp3 = null;
        if (tmpResult.isGameWidget(widget)) {
          const obj2 = { userId: user.id, widget, cardStyle: items, disableInteraction: true };
          tmp3 = timestampProducer(UserProfileWidgetsBoard.WidgetSection, obj2, widget.getUniqueKey());
        }
        tmpResult = UserProfileGameWidgetTypes;
      }
      return tmp3;
    })
  });
  obj8.children = items5;
  items3[1] = closure_7(closure_4, obj8);
  obj6.children = items3;
  items2[1] = closure_7(closure_4, obj6);
  obj5.children = items2;
  obj4.children = closure_7(closure_4, obj5);
  items1[1] = closure_6(closure_3, obj4);
  obj3.children = items1;
  obj2.children = closure_7(closure_4, obj3);
  return closure_6(user(items[19]).ThemeContextProvider, obj2);
};