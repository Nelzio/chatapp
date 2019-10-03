<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md row justify-center">
      <div style="width: 100%;">
        <div v-for="message in messages" :key="message.id">
        <q-chat-message
          v-if="message.user == 1"
          name="me"
          :text="[message.message]"
          sent
        />
        <q-chat-message
        v-else
          name="Outro"
          :text="[message.message]"
        />
        </div>
      </div>
    </div>

    <q-footer class="text-white q-pl-md q-pb-md q-pr-md bg-white">
    	<q-form
			@submit="onSubmit"
			class="q-gutter-md"
		    >
	        <div class="row">
		    <div class="col">
			    <q-input outlined v-model="message" placeholder="message" />
		    </div>
		        <q-btn @click.native="onSubmit" fab class="q-ml-sm" color="teal" icon="send" />
		    </div>
	    </q-form>
    </q-footer>

  </q-page>
</template>

<script>
import firebaseInit from '../libs/firebaseconf'
export default {
  name: 'ChatPage',
  data () {
    return {
      message: null,
      age: null,
      messages: [],
      pageTitle: "Dzudza Chat",
      accept: false,
      //============================
      username: '',
      //messages: []
    }
  },
  methods: {
  	page_title() {
      /**functio to set page title */
      this.$root.$emit("page_title", this.pageTitle);
    },
    onSubmit () {
      //this.send_message()
      this.sendMessage()
      this.message = null
      
    },

    sendMessage() {
      const user = 1
      const chatId = 1
      const message = {
        message: this.message,
        chatId: chatId,
        receiver: 2,
        user: user
      }
      firebaseInit.database().ref('messages').push(message)
    }
  },
  mounted() {
  	this.page_title()
    let self = this;
    const itemsRef = firebaseInit.database().ref('messages');
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          message: data[key].message,
          chatId: data[key].chatId,
          receiver: data[key].receiver,
          user: data[key].user
        });
      });
      self.messages = messages;
    })
  }
}
</script>

<style>
</style>