angular
  .module('app')
  .component('layakHuniForm', {
    templateUrl: 'app/pages/layakHuniForm/layakHuniForm.html',
    controller: layakHuniFormController,
    controllerAs: 'vm'
  });

function layakHuniFormController(SurveyLayakHuniService, configSettings) {
  var vm = this;

  // Construct initial data first for the survey form
  vm.jenisKelamin = [
    {
      jk: 'Laki-laki',
      id: 1
    },
    {
      jk: 'Perempuan',
      id: 2
    }
  ];
  vm.pekerjaan = [
    {
      kerja: 'PNS/TNI/Polri',
      id: 1
    },
    {
      kerja: 'Swasta',
      id: 2
    },
    {
      kerja: 'Tenaga Kontrak',
      id: 3
    },
    {
      kerja: 'Karyawan',
      id: 4
    },
    {
      kerja: 'Siswa/Mahasiswa',
      id: 5
    },
    {
      kerja: 'Ibu Rumah Tangga',
      id: 6
    },
    {
      kerja: 'Petani/Buruh',
      id: 7
    }
  ];

  SurveyLayakHuniService.getKecamatanDesa().then(function (d) {
    vm.kecamatanDesa = d.data;
  });

  vm.isiLayakHuni = {
    base: configSettings.baseUrl
  };

  function removeDesa() {
    delete vm.isiLayakHuni.desa;
  }
  vm.removeDesa = removeDesa;
}
