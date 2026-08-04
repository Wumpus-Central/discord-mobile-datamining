// discord_app/modules/errors/av_errors/definitions/index.tsx
const obj = {};
obj[require("mapped").AVError.NO_AUDIO_INPUT_DETECTED] = require("AVErrorNoAudioInputDetectedDefinition").AVErrorNoAudioInputDetectedDefinition;
obj[require("mapped").AVError.NO_INPUT_DEVICES] = require("AVErrorNoInputDevicesDefinition").AVErrorNoInputDevicesDefinition;
obj[require("mapped").AVError.STREAM_VIEW_LOW_FPS] = require("AVErrorStreamViewLowFPSDefinition").AVErrorStreamViewLowFPSDefinition;
obj[require("mapped").AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = require("AVErrorStreamViewHighPacketLossDefinition").AVErrorStreamViewHighPacketLossDefinition;
obj[require("mapped").AVError.STREAM_SEND_HIGH_PACKET_LOSS] = require("AVErrorStreamSendHighPacketLossDefinition").AVErrorStreamSendHighPacketLossDefinition;
obj[require("mapped").AVError.STREAM_SEND_LOW_FPS] = require("AVErrorStreamSendLowFPSDefinition").AVErrorStreamSendLowFPSDefinition;
obj[require("mapped").AVError.STREAM_BAD_NETWORK_QUALITY] = require("AVErrorStreamBadNetworkQualityDefinition").AVErrorStreamBadNetworkQualityDefinition;
obj[require("mapped").AVError.STREAM_SOUNDSHARE_FAILED] = require("AVErrorStreamSoundshareFailedDefinition").AVErrorStreamSoundshareFailedDefinition;
obj[require("mapped").AVError.STREAM_FAILED_TO_START] = require("AVErrorStreamFailedToStartDefinition").AVErrorStreamFailedToStartDefinition;
obj[require("mapped").AVError.STREAM_RECONNECTING] = require("AVErrorStreamReconnectingDefinition").AVErrorStreamReconnectingDefinition;
obj[require("mapped").AVError.SCREENSHARE_OS_ERROR] = require("AVErrorScreenshareOSErrorDefinition").AVErrorScreenshareOSErrorDefinition;
obj[require("mapped").AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = require("AVErrorAudioCaptureSampleRateMismatchDefinition").AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[require("mapped").AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = require("AVErrorVideoStreamSenderReadyTimeoutDefinition").AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[require("mapped").AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = require("AVErrorVideoStreamReceiverReadyTimeoutDefinition").AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[require("mapped").AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = require("AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition").AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[require("mapped").AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = require("AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition").AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[require("mapped").AVError.CAMERA_SEND_LOW_FPS] = require("AVErrorCameraSendLowFPSDefinition").AVErrorCameraSendLowFPSDefinition;
const result = require("AVErrorNoInputDevicesDefinition").fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;