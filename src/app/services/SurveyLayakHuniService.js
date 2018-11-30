angular
  .module('app')
  .service('SurveyLayakHuniService', SurveyLayakHuniService);

function SurveyLayakHuniService($http, $state, configSettings) {
  var vm = this;

  /* Survey Layak Huni Entry */

  /* get data kecamatan and desa */
  function getKecamatanDesa() {
    return $http.get(configSettings.baseUrl + 'kecamatan/kecamatan-desa');
  }
  vm.getKecamatanDesa = getKecamatanDesa;

  // Function submit layak huni form
  function submitLayakHuniForm(data) {
    $http.post(configSettings.baseUrl + 'survey/tambah-data-layak-huni', {
      nama: data.nama,
      jenisKelamin: data.jenisKelamin,
      usia: data.usia,
      pekerjaan: data.pekerjaan,
      kecamatanId: data.kecamatan.ID_Kecamatan,
      kecamatanLat: data.kecamatan.Lintang,
      kecamatanLng: data.kecamatan.Bujur,
      desaId: data.desa.DESA_ID,
      desaLat: data.desa.LINTANG,
      desaLng: data.desa.BUJUR,
      aman: data.aman,
      nyaman: data.nyaman,
      mudahPolisi: data.mudahPolisi,
      kualitasPolisi: data.kualitasPolisi,
      unjukRasa: data.unjukRasa,
      bebasPendapat: data.bebasPendapat,
      amanBencana: data.amanBencana,
      peringatanDini: data.peringatanDini,
      sehatLingkungan: data.sehatLingkungan,
      penyakitMenular: data.penyakitMenular,
      layananKesehatan: data.layananKesehatan,
      kualitasLayananKesehatan: data.kualitasLayananKesehatan,
      kebersihanUdara: data.kebersihanUdara,
      kebersihanSungai: data.kebersihanSungai,
      kebersihanJalan: data.kebersihanJalan,
      layananSampah: data.layananSampah,
      mudahKerja: data.mudahKerja,
      pengembanganUsaha: data.pengembanganUsaha,
      biayaHidup: data.biayaHidup,
      pasarTradisional: data.pasarTradisional,
      penataanPKL: data.penataanPKL,
      ojek: data.ojek,
      mudahSembako: data.mudahSembako,
      nutrisi: data.nutrisi,
      informasiPembangunan: data.informasiPembangunan,
      terlibatPembangunan: data.terlibatPembangunan,
      memilikiRumah: data.memilikiRumah,
      fisikRumah: data.fisikRumah,
      pelayananPendidikan: data.pelayananPendidikan,
      kualitasPendidikan: data.kualitasPendidikan,
      pelayananAdministrasi: data.pelayananAdministrasi,
      kualitasAdministrasi: data.kualitasAdministrasi,
      kemudahanTamanKota: data.kemudahanTamanKota,
      kualitasTamanKota: data.kualitasTamanKota,
      difabelTamanKota: data.difabelTamanKota,
      kemudahanOlahraga: data.kemudahanOlahraga,
      kemudahanKesenianBudaya: data.kemudahanKesenianBudaya,
      kualitasKesenianBudaya: data.kualitasKesenianBudaya,
      frekuensiFestivalBudaya: data.frekuensiFestivalBudaya,
      kemudahanWisata: data.kemudahanWisata,
      kualitasWisata: data.kualitasWisata,
      fasilitasHiburan: data.fasilitasHiburan,
      kualitasHiburan: data.kualitasHiburan,
      kualitasJalurPejalanKaki: data.kualitasJalurPejalanKaki,
      difabelPejalanKaki: data.difabelPejalanKaki,
      kemacetan: data.kemacetan,
      resikoKecelakaanLantas: data.resikoKecelakaanLantas,
      kualitasJalanKota: data.kualitasJalanKota,
      kualitasAngkutanUmum: data.kualitasAngkutanUmum,
      infoAngkutanUmum: data.infoAngkutanUmum,
      mencapaiTujuan: data.mencapaiTujuan,
      airBersih: data.airBersih,
      kualitasDrainase: data.kualitasDrainase,
      kualitasSinyal: data.kualitasSinyal,
      internetSeluler: data.internetSeluler,
      kualitasListrik: data.kualitasListrik,
      kualitasTataKota: data.kualitasTataKota,
      suhuKota: data.suhuKota,
      toleransiMasyarakat: data.toleransiMasyarakat,
      transparansiPemerintah: data.transparansiPemerintah
    }).then(function (result) {
      if (result.status !== 200) {
        alert('Ada kesalahan pada input anda atau server error. Coba lagi!'); // eslint-disable-line no-alert
      } else if (result.status === 200) {
        alert('Data berhasil ditambah'); // eslint-disable-line no-alert
        $state.reload();
      }
    });
  }
  vm.submitLayakHuniForm = submitLayakHuniForm;
}
