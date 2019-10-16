let dataFormat000 = {
  weedDetectionCamera : {
    cameraId : {
      timeStamp : {
        heightArr : {
          widthArr : {
            1 : {
              r : "Number",
              g : "Number",
              b : "Number",
            },
            // ...widthImage
          }
          // ...heightImage
        }
        // ...framesSent
      }
    },
    cameraOffset : {
      x : "Number",
      y : "Number",
      z : "Number",
    }
    // ...cameraNbr
  },

  orientationCamera : {
    cameraId : {
      timeStamp : {
        heightArr : {
          widthArr : {
            1 : {
              r : "Number",
              g : "Number",
              b : "Number",
            },
            // ...widthImage
          }
          // ...heightImage
        }
        // ...framesSent
      }
    },
    cameraOffset : {
      x : "Number",
      y : "Number",
      z : "Number",
    }
    // ...cameraNbr
  },

  location : {
    x : "Number",
    y : "Number",
    y : "Number",
  },

  angle : {
    gyroscopeId : {
      roll : "Number",
      yaw : "Number",
      pitch : "Number",
    } 
    // ... nbrGyroscope
  },

  motorEncoder : {
    motorId : {
      positionOffset : "Number"
    } 
    // ... nbrMotor
  },

  limits : {
    limitSwitchId : {
      activated : "Boolean"
    } 
    // ... nbrLimitSwitch
  },

  fieldData : {
    fieldId : {
      coordinates : {
        positionId : {

        }
        // ... nbr of points
      }
    }
  },

  adminInField : {
    adminId : {
      position : {
        
      }
    }
    // ... admin nbr
  }
}