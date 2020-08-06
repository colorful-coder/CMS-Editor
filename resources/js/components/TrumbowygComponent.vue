

<template>
  <div>
    <trumbowyg v-model="content" :config="config" class="form-control" name="content"></trumbowyg>
  </div>
</template>

<script>  
  // Import this component
  import Trumbowyg from 'vue-trumbowyg';
  
  // Import editor css
  import 'trumbowyg/dist/ui/trumbowyg.css';
  import '../plugins/base64/trumbowyg.base64.js';
  import '../plugins/table/trumbowyg.table.js';
  import '../plugins/table/ui/sass/trumbowyg.table.scss';
  import '../plugins/resizimg/trumbowyg.resizimg.js';
  import '../jquery-resizable';
  import '../turmbowyg.youtubelink';
  export default {    
    data () {
        return {
            content: null,
            config: {
                btns: [
                    ['viewHTML'],
                    ['undo', 'redo'], // Only supported in Blink browsers
                    ['formatting'],
                    ['strong', 'em', 'del'],
                    ['superscript', 'subscript'],
                    ['link'],
                    ['image'],
                    ['table'],
                    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                    ['unorderedList', 'orderedList'],
                    ['horizontalRule'],
                    ['removeformat'],
                    ['fullscreen'],
                    ['youtubelink'],
                    ['resizimg'],
                ],
                btnsDef: {
                    image: {
                        dropdown: ['insertImage', 'base64'],
                        ico: 'insertImage'
                    }
                },
                plugins:{
                    youtubelink: {},
                    resizimg: {
                        minSize: 32,
                        step: 4
                    }
                }
            },
        }
    },
    components: {
      Trumbowyg
    },
    
  }
</script> 
