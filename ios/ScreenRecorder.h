//
//  ScreenRecorder.h
//  Test
//
//  Created by lol on 12/02/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//
//  ScreenRecordingDetector -> Created by Abhilash on 29/12/17.
//  Twitter: @abhilashkm1992
//  Copyright © 2017 Abhilash. All rights reserved.
//

#import "React/RCTBridgeModule.h"

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

extern NSString *kScreenRecordingDetectorRecordingStatusChangedNotification;

@interface ScreenRecordingDetector : NSObject

+(instancetype)sharedInstance;
+ (void)triggerDetectorTimer;
+ (void)stopDetectorTimer;
- (BOOL)isRecording;

@end

@interface ScreenRecorderGang : NSObject <RCTBridgeModule>
@end
