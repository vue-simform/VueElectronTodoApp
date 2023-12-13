<template>
  <div class="box">
    <VaNavbar color="#F4F8FA" class="mb-3">
      <template #center>
        <VaNavbarItem class="logo">
          <b>Task Manager</b>
        </VaNavbarItem>
      </template>
      <template #right>
        <VaButton class="mr-3 mb-2" @click="openTaskForm()"> Add Task </VaButton>
      </template>
    </VaNavbar>
    
    <hr />
    <h3>Tasks</h3>
    
    <VaDataTable
      class="padding text-align"
      v-model="selectedItems"
      :items="tasks"
      :columns="columns"
      selectable
      :cell-bind="isCellBind && getCellBind"
      @selectionChange="selectedItemsEmitted = $event.currentSelectedItems"
    >
      <template #cell(actions)="{ rowIndex }">
        <va-button @click="deleteItem(rowIndex)" color="danger" class="mr-6 mb-2">
          Delete
        </va-button>
      </template>
    </VaDataTable>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskForm from "@/components/TaskForm.vue";

export default {
  name: "HomeView",
  components: {
    TaskForm,
  },
  data() {
    const columns = [
      { key: "task", sortable: true },
      { key: "actions", sortable: false },
    ];
    return {
      task: null,
      columns,
      isCellBind: true,
      isRowBind: true,
      selectedItems: [],
      selectedItemsEmitted: [],
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getTaskList;
    },
  },
  mounted() {
    this.tasks;
    // let abc = window.api.chrome();
    // let electron = window.api.electron();
  },

  methods: {
    getCellBind(cell, row, column) {
      if (this.selectedItems) {
        this.selectedItems.filter((selectedItem) => {
          if (cell == selectedItem.task) {
            return {
              class: ["custom-class"],
            };
          }
        });
      }
    },
    openTaskForm() {
      this.$router.push("/task");
      // window.api.send("new-window", openTaskForm);
    },
    deleteItem(index) {
      this.$store.commit("deleteItem", index);
    },
  },
};
</script>
<style lang="scss" scoped>
.padding {
  padding-bottom: 4px;
}
.text-align {
  margin: 0 auto;
  display: flex;
  width: 55%;
  text-align: center;
  align-items: center;
}
::v-deep(.custom-class) {
  text-decoration: line-through;
  pointer-events: none;
  background-color: var(--va-background-element);
}
</style>
