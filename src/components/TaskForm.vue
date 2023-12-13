<template>
  <VaNavbar color="#F4F8FA" class="mb-3">
      <template #center>
        <VaNavbarItem class="logo">
          <h1 class="va-h3">Add Tasks Here</h1>
        </VaNavbarItem>
      </template>
      <template #left>
        <VaButton class="mr-3 mb-2" @click="redirectToTaskList()"> Back to task List </VaButton>
      </template>
  </VaNavbar>
  <div class="taskform">
    <v-sheet width="300" class="mx-auto">
      <v-form>
        <v-text-field
          v-model="task"
          label="Add Task"
        ></v-text-field>
        <v-btn :disabled="!task" type="submit" @click="addTask()" block class="mt-2"
          >Submit</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>

<script>

export default {
  name: "task",
  components: {
  },
  data() {
    return {
      task: "",
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  // mounted(){
  //     this.$store.dispatch('getTasks')
  // }

  methods: {
    addTask() {
      // this.$store.dispatch('ADD_TASK',this.task)
      this.$store.commit("ADD_TASK", this.task);
      this.task = null;
      this.$router.push("./");
    },
    redirectToTaskList(){
      this.$router.push("/");
    }
  },
};
</script>
<style>
.center {
  text-align: center;
  font-size: 30px;
}
.taskform {
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 7%;
}
</style>
