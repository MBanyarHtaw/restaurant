import { computed, ref } from "vue";

let buttonChange =()=>{
    let showAboutpage =ref(false);
    let showContentPage =ref(true)
    let isActive =ref(false)
    let changeButton=()=>{
      showAboutpage.value =! showAboutpage.value;
      isActive.value =! isActive.value;
      showContentPage.value =! showContentPage.value
    }
     const buttonName = computed(() => (isActive.value ? 'Close' : 'About Us'));
     return {showAboutpage,buttonName,changeButton,showContentPage}
    }
export default buttonChange;