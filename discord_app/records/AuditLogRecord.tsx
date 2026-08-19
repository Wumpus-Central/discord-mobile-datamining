// === Module 16758: getTargetType ===

// Module 16758 (getTargetType)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import _modDef1208 from "module_1208" /* 1208 */;
import toJSDefault from "toJS" /* 1931 */;
import tDefault from "t" /* 3975 */;
import ME from "ME" /* 676 */;

function getTargetType(action) {
  if (action === constants2.ALL) {
    let CHANNEL = constants.ALL;
  } else if (action <= constants2.GUILD_UPDATE) {
    CHANNEL = constants.GUILD;
  } else {
    if (action > constants2.CHANNEL_DELETE) {
      if (action !== constants2.MESSAGE_BULK_DELETE) {
        if (action <= constants2.CHANNEL_OVERWRITE_DELETE) {
          CHANNEL = constants.CHANNEL_OVERWRITE;
        } else {
          if (action > constants2.BOT_ADD) {
            if (action !== constants2.MESSAGE_DELETE) {
              if (action !== constants2.MESSAGE_PIN) {
                if (action !== constants2.MESSAGE_UNPIN) {
                  if (action <= constants2.ROLE_DELETE) {
                    CHANNEL = constants.ROLE;
                  } else if (action <= constants2.INVITE_DELETE) {
                    CHANNEL = constants.INVITE;
                  } else if (action <= constants2.WEBHOOK_DELETE) {
                    CHANNEL = constants.WEBHOOK;
                  } else if (action <= constants2.EMOJI_DELETE) {
                    CHANNEL = constants.EMOJI;
                  } else if (action <= constants2.INTEGRATION_DELETE) {
                    CHANNEL = constants.INTEGRATION;
                  } else if (action <= constants2.STAGE_INSTANCE_DELETE) {
                    CHANNEL = constants.STAGE_INSTANCE;
                  } else if (action <= constants2.STICKER_DELETE) {
                    CHANNEL = constants.STICKER;
                  } else if (action <= constants2.GUILD_SCHEDULED_EVENT_DELETE) {
                    CHANNEL = constants.GUILD_SCHEDULED_EVENT;
                  } else if (action <= constants2.THREAD_DELETE) {
                    CHANNEL = constants.THREAD;
                  } else if (action === constants2.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                    CHANNEL = constants.APPLICATION_COMMAND;
                  } else if (action <= constants2.SOUNDBOARD_SOUND_DELETE) {
                    CHANNEL = constants.GUILD_SOUNDBOARD;
                  } else if (action < constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
                    CHANNEL = constants.AUTO_MODERATION_RULE;
                  } else {
                    if (action !== constants2.AUTO_MODERATION_BLOCK_MESSAGE) {
                      if (action !== constants2.AUTO_MODERATION_FLAG_TO_CHANNEL) {
                        if (action !== constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
                          if (action !== constants2.AUTO_MODERATION_QUARANTINE_USER) {
                            if (action <= constants2.CREATOR_MONETIZATION_TERMS_ACCEPTED) {
                              CHANNEL = constants.GUILD;
                            } else if (action <= constants2.ONBOARDING_PROMPT_DELETE) {
                              CHANNEL = constants.ONBOARDING_PROMPT;
                            } else if (action <= constants2.ONBOARDING_UPDATE) {
                              CHANNEL = constants.GUILD_ONBOARDING;
                            } else if (action <= constants2.GUILD_HOME_REMOVE_ITEM) {
                              CHANNEL = constants.GUILD_HOME;
                            } else if (action <= constants2.HARMFUL_LINKS_BLOCKED_MESSAGE) {
                              CHANNEL = constants.GUILD;
                            } else if (action <= constants2.HOME_SETTINGS_UPDATE) {
                              CHANNEL = constants.HOME_SETTINGS;
                            } else if (action <= constants2.VOICE_CHANNEL_STATUS_DELETE) {
                              CHANNEL = constants.VOICE_CHANNEL_STATUS;
                            } else if (action <= constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) {
                              CHANNEL = constants.GUILD_SCHEDULED_EVENT_EXCEPTION;
                            } else if (action <= constants2.GUILD_MEMBER_VERIFICATION_UPDATE) {
                              CHANNEL = constants.GUILD_MEMBER_VERIFICATION;
                            } else if (action <= constants2.GUILD_PROFILE_UPDATE) {
                              CHANNEL = constants.GUILD_PROFILE;
                            } else if (action <= constants2.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION) {
                              CHANNEL = constants.GUILD;
                            } else {
                              const _HermesInternal = HermesInternal;
                              _modDef1208.captureMessage("Unknown target type for: " + action);
                              CHANNEL = constants.UNKNOWN;
                            }
                          }
                        }
                      }
                    }
                    CHANNEL = constants.USER;
                  }
                }
              }
            }
          }
          CHANNEL = constants.USER;
        }
      }
    }
    CHANNEL = constants.CHANNEL;
  }
  return CHANNEL;
}
function getActionType(action) {
  if (constants2.CHANNEL_CREATE !== action) {
    if (constants2.CHANNEL_OVERWRITE_CREATE !== action) {
      if (constants2.MEMBER_BAN_REMOVE !== action) {
        if (constants2.ROLE_CREATE !== action) {
          if (constants2.INVITE_CREATE !== action) {
            if (constants2.WEBHOOK_CREATE !== action) {
              if (constants2.EMOJI_CREATE !== action) {
                if (constants2.STICKER_CREATE !== action) {
                  if (constants2.MESSAGE_PIN !== action) {
                    if (constants2.BOT_ADD !== action) {
                      if (constants2.INTEGRATION_CREATE !== action) {
                        if (constants2.STAGE_INSTANCE_CREATE !== action) {
                          if (constants2.GUILD_SCHEDULED_EVENT_CREATE !== action) {
                            if (constants2.THREAD_CREATE !== action) {
                              if (constants2.AUTO_MODERATION_RULE_CREATE !== action) {
                                if (constants2.CREATOR_MONETIZATION_REQUEST_CREATED !== action) {
                                  if (constants2.ONBOARDING_PROMPT_CREATE !== action) {
                                    if (constants2.ONBOARDING_CREATE !== action) {
                                      if (constants2.GUILD_HOME_FEATURE_ITEM !== action) {
                                        if (constants2.SOUNDBOARD_SOUND_CREATE !== action) {
                                          if (constants2.HOME_SETTINGS_CREATE !== action) {
                                            if (constants2.VOICE_CHANNEL_STATUS_CREATE !== action) {
                                              if (constants2.CHANNEL_DELETE !== action) {
                                                if (constants2.CHANNEL_OVERWRITE_DELETE !== action) {
                                                  if (constants2.MEMBER_KICK !== action) {
                                                    if (constants2.MEMBER_PRUNE !== action) {
                                                      if (constants2.MEMBER_BAN_ADD !== action) {
                                                        if (constants2.ROLE_DELETE !== action) {
                                                          if (constants2.INVITE_DELETE !== action) {
                                                            if (constants2.WEBHOOK_DELETE !== action) {
                                                              if (constants2.EMOJI_DELETE !== action) {
                                                                if (constants2.STICKER_DELETE !== action) {
                                                                  if (constants2.MESSAGE_DELETE !== action) {
                                                                    if (constants2.MESSAGE_BULK_DELETE !== action) {
                                                                      if (constants2.MESSAGE_UNPIN !== action) {
                                                                        if (constants2.INTEGRATION_DELETE !== action) {
                                                                          if (constants2.MEMBER_DISCONNECT !== action) {
                                                                            if (constants2.STAGE_INSTANCE_DELETE !== action) {
                                                                              if (constants2.GUILD_SCHEDULED_EVENT_DELETE !== action) {
                                                                                if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE !== action) {
                                                                                  if (constants2.THREAD_DELETE !== action) {
                                                                                    if (constants2.AUTO_MODERATION_BLOCK_MESSAGE !== action) {
                                                                                      if (constants2.AUTO_MODERATION_RULE_DELETE !== action) {
                                                                                        if (constants2.ONBOARDING_PROMPT_DELETE !== action) {
                                                                                          if (constants2.GUILD_HOME_REMOVE_ITEM !== action) {
                                                                                            if (constants2.SOUNDBOARD_SOUND_DELETE !== action) {
                                                                                              if (constants2.VOICE_CHANNEL_STATUS_DELETE !== action) {
                                                                                                if (constants2.GUILD_UPDATE !== action) {
                                                                                                  if (constants2.CHANNEL_UPDATE !== action) {
                                                                                                    if (constants2.CHANNEL_OVERWRITE_UPDATE !== action) {
                                                                                                      if (constants2.MEMBER_UPDATE !== action) {
                                                                                                        if (constants2.MEMBER_ROLE_UPDATE !== action) {
                                                                                                          if (constants2.ROLE_UPDATE !== action) {
                                                                                                            if (constants2.INVITE_UPDATE !== action) {
                                                                                                              if (constants2.WEBHOOK_UPDATE !== action) {
                                                                                                                if (constants2.EMOJI_UPDATE !== action) {
                                                                                                                  if (constants2.STICKER_UPDATE !== action) {
                                                                                                                    if (constants2.INTEGRATION_UPDATE !== action) {
                                                                                                                      if (constants2.MEMBER_MOVE !== action) {
                                                                                                                        if (constants2.STAGE_INSTANCE_UPDATE !== action) {
                                                                                                                          if (constants2.GUILD_SCHEDULED_EVENT_UPDATE !== action) {
                                                                                                                            if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE !== action) {
                                                                                                                              if (constants2.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE !== action) {
                                                                                                                                if (constants2.THREAD_UPDATE !== action) {
                                                                                                                                  if (constants2.APPLICATION_COMMAND_PERMISSION_UPDATE !== action) {
                                                                                                                                    if (constants2.CREATOR_MONETIZATION_TERMS_ACCEPTED !== action) {
                                                                                                                                      if (constants2.AUTO_MODERATION_RULE_UPDATE !== action) {
                                                                                                                                        if (constants2.AUTO_MODERATION_FLAG_TO_CHANNEL !== action) {
                                                                                                                                          if (constants2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED !== action) {
                                                                                                                                            if (constants2.AUTO_MODERATION_QUARANTINE_USER !== action) {
                                                                                                                                              if (constants2.ONBOARDING_PROMPT_UPDATE !== action) {
                                                                                                                                                if (constants2.ONBOARDING_UPDATE !== action) {
                                                                                                                                                  if (constants2.SOUNDBOARD_SOUND_UPDATE !== action) {
                                                                                                                                                    if (constants2.HOME_SETTINGS_UPDATE !== action) {
                                                                                                                                                      if (constants2.GUILD_MEMBER_VERIFICATION_UPDATE !== action) {
                                                                                                                                                        if (constants2.GUILD_PROFILE_UPDATE !== action) {
                                                                                                                                                          if (constants2.GUILD_MIGRATE_PIN_PERMISSION !== action) {
                                                                                                                                                            if (constants2.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION !== action) {
                                                                                                                                                              return constants3.ALL;
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                return constants3.UPDATE;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              return constants3.DELETE;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return constants3.CREATE;
}
toJSDefault;
({ AuditLogTargetTypes: obj1, AuditLogActions: c3, AuditLogActionTypes: c4 } = ME);
const prototype = function AuditLogRecord(timestampEnd) {
  const tmp5 = new prototype(tmp4, tmp3, tmp2, tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp5.id, action: tmp5.action } = timestampEnd);
  tmp5.actionType = getActionType(tmp5.action);
  ({ targetId: tmp5.targetId, timestampStart } = timestampEnd);
  if (timestampStart == null) {
    const tmp8 = tDefault;
    timestampStart = tmp8(DISCORD_EPOCHDefault.extractTimestamp(tmp5.id));
  }
  tmp5.timestampStart = timestampStart;
  let timestampStart2 = timestampEnd.timestampEnd;
  if (timestampStart2 == null) {
    timestampStart2 = tmp5.timestampStart;
  }
  tmp5.timestampEnd = timestampStart2;
  ({ userId: tmp5.userId, changes } = timestampEnd);
  if (changes == null) {
    changes = [];
  }
  tmp5.changes = changes;
  tmp5.targetType = getTargetType(tmp5.action);
  let options = timestampEnd.options;
  if (options == null) {
    options = {};
  }
  tmp5.options = options;
  let id = timestampEnd.target;
  if (id == null) {
    id = timestampEnd.id;
  }
  tmp5.target = id;
  let user = timestampEnd.user;
  if (user == null) {
    user = null;
  }
  tmp5.user = user;
  return tmp5;
}.prototype;
class prototype extends tmp2 {
}
const result = require("obj132").fileFinishedImporting("records/AuditLogRecord.tsx");

export default prototype;
export { getTargetType };
export { getActionType };
export const AuditLogChange = function AuditLogChange(AVAILABLE_TAG_ADD, oldValue, newValue) {
  const obj = Object.create(new.target.prototype);
  obj.key = AVAILABLE_TAG_ADD;
  obj.oldValue = oldValue;
  obj.newValue = newValue;
  return obj;
}.prototype;