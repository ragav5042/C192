AFRAME.registerComponent("cursor-listener", {
    schema: {
      elementId: { default: "#box1", type: "string" }
    },
      update: function () {
        this.isCollided(this.data.elementId);
      },
      isCollided: function (elemntId) {
        const element = document.querySelector(elemntId);
        element.addEventListener("collide", (e) => {
          if (elemntId.includes("#box")) {
            console.log(elementId)
            element.setAttribute("visible",false)
            // this.updatetargets()
            // this.updatescore()
          } else {
            // this.gameover()
          }
        });
      },
    })