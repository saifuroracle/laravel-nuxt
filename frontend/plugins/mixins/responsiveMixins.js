

export default{

  data() {
    return {
        windowWidth: 0,
        windowHeight: 0,
    }
  },
  mounted() {

    setTimeout(() => {
      this.windowSetter()
    }, 2000)
  },
  updated() {

  },
  methods: {
    windowSetter(){

      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight

      });

      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  },
  computed: {
      // ==
      isXS() {
          return this.windowWidth < 600
      },
      isSM() {
          return ((this.windowWidth  >= 600) &&  (this.windowWidth< 960))
      },
      isMD() {
          return ((this.windowWidth  >= 960) &&  (this.windowWidth< 1264))
      },
      isLG() {
          return ((this.windowWidth  >= 1264) &&  (this.windowWidth< 1904))
      },
      isXL() {
          return this.windowWidth  >= 1904
      },

      // >
      isGTXS() {
          return this.windowWidth >= 600
      },
      isGTSM() {
          return this.windowWidth >= 960
      },
      isGTMD() {
          return this.windowWidth >= 1264
      },


      // >=
      isSMAGT() {
          return this.windowWidth >= 600
      },
      isMDAGT() {
          return this.windowWidth >= 960
      },
      isLGAGT() {
          return this.windowWidth >= 1264
      },


      // <
      isLTMD() {
          return this.windowWidth < 960
      },
      isLTLG() {
          return this.windowWidth < 1264
      },
      isLTXL() {
          return this.windowWidth < 1904
      },

      // <=
      isSMALT() {
          return this.windowWidth < 960
      },
      isMDALT() {
          return this.windowWidth < 1264
      },
      isLGALT() {
          return this.windowWidth < 1904
      },

      // *
      isAllDisplay() {
          return this.windowWidth > 0
      },



  },


}







