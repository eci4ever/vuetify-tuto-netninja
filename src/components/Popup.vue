<template>
    <v-dialog v-model="dialog" persistent max-width="400">
      <template v-slot:activator="{ on }">
        <v-btn color="success" class="text--white" dark v-on="on">Add new project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Add new project</v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="Title" v-model="title" 
                :rules="titleRules" prepend-icon="folder"></v-text-field>
                <v-textarea label="Content" v-model="content" 
                :rules="contentRules" prepend-icon="edit"></v-textarea>
                <v-menu v-model="menu2" :close-on-content-click="false"
                  :nudge-right="40" transition="scale-transition"
                  offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field :value="computedDateFormattedMomentjs" label="Due date"
                      prepend-icon="event" v-on="on">
                    </v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import moment from 'moment'

export default {
    data: () => ({
      dialog: false,
      title: '',
      titleRules: [v => !!v || 'Title is required'],
      content: '',
      contentRules: [v => !!v || 'Content is required'],
      date: new Date().toISOString().substr(0, 10),
      menu2: false
    }),
    methods: {
        submit() {
            if (this.$refs.form.validate())
            console.log(this.title, this.content, this.date)
        }
    },
    computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      }
    }
}
</script>