new Vue({
    el: '#app',
    data: {
        chips: [{apelido:'Mala pessoal',serie:'BR786428',color:'#E33348',ativo: true},],
        newApelido: '',
        newSerial: '',
        newColor: '',
        mapActive: true,
        page: true
    },
    methods: {
        addChip () {
            let apelidoStore = this.newApelido
            let serialStore = this.newSerial
            let colorStore = this.newColor

            this.chips.push({apelido: apelidoStore, serie: serialStore, color: colorStore, ativo: false})
            this.newApelido = ''
            this.newColor = ''
            this.newSerial = ''
        }
    }
})