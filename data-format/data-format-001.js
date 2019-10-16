var dataFormat001 = {
  detectedElements: {
    elementId: {
      type: "String", // WEED , ROCK, LEAF, HUMAIN, ANOMALY, CROP, ANIMALS, MACHINE_PARTS, BROTHER, 
      subType: "String", // Type of weed, Type of rock
      positon: {
        x: "Number",
        y: "Number",
        z: "Number",
      },
      state: "String",
      cad: ""
    }
    // ... nbrElements
  }
}


let detectedElements = {

  "ID": {
    type: "WEED",
    subType: "String", // @TODO find QC bad weed types
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String",
    cad: ""
  },

  "ID": {
    type: "ROCK",
    subType: "String", // @TODO find rock potential impact
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String",
    cad: ""
  },

  "ID": {
    type: "LEAF",
    subType: "String", // @TODO find leaf potential impact
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String",
    cad: ""
  },

  "ID": {
    type: "HUMAIN",
    subType: "String", // Privilege : "Admin", "Non-Admin"
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String",
    cad: ""
  },

  "ID": {
    type: "ANOMALY",
    subType: "String", // @TODO find types of anomalies
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String",
    cad: ""
  },

  "ID": {
    type: "CROP",
    subType: "String", // @TODO find crop distinctions 
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String", // @TODO identify data we want to gather about crop 
    cad: ""
  },

  "ID": {
    type: "ANIMALS",
    subType: "String", // @TODO find possible animals
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String", 
    cad: ""
  },

  "ID": {
    type: "MACHINE_PARTS",
    subType: "String", // @TODO machine parts (WheelsId, ToolsId, ...)
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String", // @TODO forEach machine part (Define possibilities)
    cad: ""
  },

  "ID": {
    type: "BROTHER",
    subType: "String", // @TODO find crop distinctions
    positon: {
      x: "number",
      y: "number",
      z: "number",
    },
    state: "String", 
    cad: ""
  },
}