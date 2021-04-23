<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newtask"
        @keyup.enter="addtask"
        class="col"
        square
        filled
        bg-color="white"
        placeholder="add task here"
        dense>
        <template v-slot:append>
          <q-btn
            @click="addtask"
            round
            dense
            flat
            icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item
        v-for="(task, index) in tasks"
        :key="index"
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-blue-1': task.done }"
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side>
          <q-btn
            @click.stop="deletetask(index)"
            outline
            round
            color="primary"
            icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="tasks.length === 0" class="notasks absolute-center">
      <q-icon
        name="check"
        size="100px"
        color="primary"/>
      <div class="text-h5 text-primary text center">
        No tasks
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      newtask: '',
      tasks: [
        {
          title: 'get bananas',
          done: false
        },
        {
          title: 'eat bananas',
          done: false
        },
        {
          title: 'poo bananas',
          done: false
        }
      ]
    }
  },
  methods: {
    deletetask (index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.notify({
          message: '<' + this.tasks[index].title + '>' + ' has successfully deleted!',
          color: 'black'
        })
        this.tasks.splice(index, 1)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    addtask () {
      if (this.newtask === '') {
        console.log('plz enter a new task !')
      } else {
        console.log('add task <' + this.newtask + '> success!')
        this.tasks.push({
          title: this.newtask,
          done: false
        })
        this.newtask = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }
  .notasks {
    opacity: 0.5
  }
</style>
