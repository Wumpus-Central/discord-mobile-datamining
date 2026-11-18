// === Module 11931: conjureProjectLinkCard ===

// Module 11931 (conjureProjectLinkCard)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8610 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8611 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 8613 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 9852 */;
import conjureSharedProjectSurfaces from "conjureSharedProjectSurfaces" /* 11932 */;
import conjureSharedProjectCoverTargetDefault from "conjureSharedProjectCoverTarget" /* 11933 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6529 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11930 */;

require = fn;
function readConjureProjectLinkCard(applicationId, ticket, memo2) {
  const status = ConjureSharedProjectStore.getStatus(applicationId, ticket);
  if (null != status) {
    if ("loading" !== status.type) {
      if ("unavailable" !== status.type) {
        if ("no_access" !== status.type) {
          if ("expired" !== status.type) {
            const application = ApplicationStore.getApplication(applicationId);
            if (null == application) {
              return null;
            } else if ("info_only" === status.type) {
              const obj2 = { type: "info_only", application };
              return obj2;
            } else {
              const project = ConjureProjectStore.getProject(status.projectId);
              if (null == project) {
                return null;
              } else {
                const owner_user_id = project.owner_user_id;
                const user = UserStore.getUser(owner_user_id);
                const obj3 = { type: "ready", application, ownerId: owner_user_id, creator: null, creatorAvatarUrl: null, projectTypes: null, canRemix: null, coverAction: null };
                let tmp9 = null;
                if (null != user) {
                  ({ guildId, channelId } = memo2);
                  const roleStyle = AccessibilityStore.roleStyle;
                  const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, ChannelStore.getChannel(channelId));
                  const colorString = userAuthorWithProcessedColor.colorString;
                  const obj4 = { name: userAuthorWithProcessedColor.nick, onClick: null };
                  const obj5 = { action: "bindUserMenu", userId: user.id, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, messageChannelId: null, fontId: null };
                  let tmp7 = null;
                  if ("username" === roleStyle) {
                    tmp7 = colorString;
                  }
                  obj5.linkColor = tmp7;
                  obj5.roleColor = colorString;
                  let colorStrings = null;
                  if (tmp3Result.isNativeMessageEligibleForEnhancedRoleColors(guildId, user.id)) {
                    colorStrings = userAuthorWithProcessedColor.colorStrings;
                  }
                  obj5.roleColors = colorStrings;
                  obj5.shouldShowRoleDot = "dot" === roleStyle && null != colorString;
                  obj5.messageChannelId = channelId;
                  tmp3Result = enhanced_role_colors_EnhancedRoleColorUtils;
                  obj5.fontId = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user, guildId);
                  obj4.onClick = obj5;
                  tmp9 = obj4;
                  const tmp3Result2 = createDisplayNameStylesMobile;
                }
                obj3.creator = tmp9;
                let avatarURL;
                if (user != null) {
                  avatarURL = user.getAvatarURL(memo2.guildId, 72);
                }
                if (avatarURL == null) {
                  avatarURL = null;
                }
                obj3.creatorAvatarUrl = avatarURL;
                let supported_surfaces = project.supported_surfaces;
                if (supported_surfaces == null) {
                  supported_surfaces = [];
                }
                obj3.projectTypes = conjureSharedProjectSurfaces.conjureSharedProjectTypes(supported_surfaces);
                let ticketValid = status.ticketValid;
                if (!ticketValid) {
                  ticketValid = canRemixProject(project);
                }
                if (ticketValid) {
                  ticketValid = ConjureMobileExperiment.isConjureMobileEnabled("ConjureProjectLinkCard");
                  const tmp11Result = ConjureMobileExperiment;
                }
                obj3.canRemix = ticketValid;
                const tmp15 = conjureSharedProjectCoverTargetDefault(applicationId, project, memo2);
                let type;
                if (tmp15 != null) {
                  type = tmp15.type;
                }
                if (type == null) {
                  type = null;
                }
                obj3.coverAction = type;
                return obj3;
              }
            }
          }
        }
        const obj7 = { type: status.type };
        return obj7;
      }
    }
  }
  return null;
}
let closure_3 = ["application"];
const canRemixProject = fn(6529).canRemixProject;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/conjureProjectLinkCard.tsx");

export { readConjureProjectLinkCard };
export function conjureProjectLinkCardKey(applicationId, ticket, memo2) {
  const tmp = readConjureProjectLinkCard(applicationId, ticket, memo2);
  if (null == tmp) {
    return "";
  } else {
    if ("no_access" !== tmp.type) {
      if ("expired" !== tmp.type) {
        const _JSON = JSON;
        const obj = {};
        ({ name, description, icon, coverImage } = tmp.application);
        const merged = Object.assign(_objectWithoutProperties(tmp, closure_3));
        items = [name, description, icon, coverImage];
        obj.application = items;
        return JSON.stringify(obj);
      }
    }
    return tmp.type;
  }
}