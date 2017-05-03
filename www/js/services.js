angular.module('building-blocks.services', [])

  .factory('News', function($resource, API_URL) {
    return $resource(API_URL + '/news', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  })

  .factory('HelpRequest', function($resource, API_URL) {
    return $resource(API_URL + '/help_requests', {}, {
      save: {
        method: 'POST'
      }
    });
  })


  .factory('Booking', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:facility_id/bookings', {facility_id: '@facility_id'}, {
      save: {
        method: 'POST'
      }
    });
  })

  .factory('Block', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:id/bookings', {id: '@id'}, {
      query: {
        method: 'GET',
        isArray: true
      },
    });
  })

  .factory('Facility', function($resource, API_URL) {
    return $resource(API_URL + '/facilities', {}, {
      query: {
        method: 'GET',
        isArray: true
      },
    });
  })

  .factory('Book', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:id/timeslots', {id: '@id'}, {
      query: {
        method: 'GET',
        isArray: true
      },
    });
  })

  .factory('Facilities', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:id/', {id: '@id'}, {
      query: {
        method: 'GET'
      },
    });
  })

  .factory('AuthService', function($resource, API_URL) {
    return $resource(API_URL + '/auth', {}, {
      save: {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      }
    });
  });
